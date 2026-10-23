import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const IMAGE_SETTLE_WINDOW_MS = 10_000;

function getAnchorTarget(hash: string): HTMLElement | null {
  if (!hash || hash === "#") return null;

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function getStickyOffset() {
  const heightOf = (element: HTMLElement | null) =>
    element?.getBoundingClientRect().height || element?.offsetHeight || 0;

  const header = document.querySelector<HTMLElement>(".site-header");
  const projectBar = document.querySelector<HTMLElement>("[data-project-bar]");

  return heightOf(header) + heightOf(projectBar);
}

function scrollToTarget(target: HTMLElement, behavior: ScrollBehavior) {
  const top = target.getBoundingClientRect().top + window.scrollY - getStickyOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
}

function comesBefore(first: Node, second: Node) {
  return Boolean(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING);
}

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();
  const navigationType = useNavigationType();
  const previousLocation = useRef<{ pathname: string; hash: string } | null>(null);

  useEffect(() => {
    let frame = 0;
    let settleTimer = 0;
    let hasAligned = false;
    let userInteracted = false;
    let observer: ResizeObserver | undefined;
    const target = getAnchorTarget(hash);
    const isSamePageHashNavigation =
      Boolean(hash) &&
      previousLocation.current?.pathname === pathname &&
      navigationType === "PUSH";

    if (!hash) {
      if (
        previousLocation.current?.pathname !== pathname ||
        previousLocation.current?.hash
      ) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      previousLocation.current = { pathname, hash };
      return;
    }

    previousLocation.current = { pathname, hash };

    if (!target) return;

    const align = (behavior: ScrollBehavior) => {
      if (!userInteracted) scrollToTarget(target, behavior);
    };

    const scheduleCorrection = () => {
      if (!hasAligned || userInteracted) return;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => align("auto"));
    };

    const imagesBeforeTarget = Array.from(document.images).filter((image) =>
      comesBefore(image, target),
    );
    const onImageSettled = (event: Event) => {
      if (event.target instanceof HTMLImageElement && comesBefore(event.target, target)) {
        scheduleCorrection();
      }
    };
    function stopWatchingLayout() {
      observer?.disconnect();
      observer = undefined;
      document.removeEventListener("load", onImageSettled, true);
      document.removeEventListener("error", onImageSettled, true);
      window.removeEventListener("wheel", onUserInteraction);
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("pointerdown", onUserInteraction);
      window.removeEventListener("keydown", onUserInteraction);
    }
    function onUserInteraction() {
      userInteracted = true;
      stopWatchingLayout();
      window.cancelAnimationFrame(frame);
    }

    document.addEventListener("load", onImageSettled, true);
    document.addEventListener("error", onImageSettled, true);
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(scheduleCorrection);
      imagesBeforeTarget.forEach((image) => {
        observer?.observe(image);
        if (image.parentElement) observer?.observe(image.parentElement);
      });
    }
    window.addEventListener("wheel", onUserInteraction, { passive: true, once: true });
    window.addEventListener("touchstart", onUserInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", onUserInteraction, { passive: true, once: true });
    window.addEventListener("keydown", onUserInteraction, { once: true });

    const behavior: ScrollBehavior =
      isSamePageHashNavigation &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "smooth"
        : "auto";
    frame = window.requestAnimationFrame(() => {
      scrollToTarget(target, behavior);
      hasAligned = true;
    });
    settleTimer = window.setTimeout(stopWatchingLayout, IMAGE_SETTLE_WINDOW_MS);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      stopWatchingLayout();
      window.removeEventListener("wheel", onUserInteraction);
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("pointerdown", onUserInteraction);
      window.removeEventListener("keydown", onUserInteraction);
    };
  }, [pathname, search, hash, navigationType]);

  return null;
}
