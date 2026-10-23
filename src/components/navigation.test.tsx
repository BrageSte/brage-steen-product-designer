import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, useLocation, useNavigate } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProjectBar from "@/components/ProjectBar";
import ScrollToTop from "@/components/ScrollToTop";
import SiteLayout from "@/components/SiteLayout";

function mockHeight(element: Element, height: number) {
  vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: height,
    width: 0,
    height,
    toJSON: () => ({}),
  });
}

function ScrollHarness() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <output data-testid="location">{`${location.pathname}${location.hash}`}</output>
      <button onClick={() => navigate(-1)}>Tilbake</button>
      <button onClick={() => navigate("/projects/headset")}>Til prosjektstart</button>
      <header className="site-header" />
      <ProjectBar title="Prosjekt" sections={[{ label: "Modell", id: "model" }]} />
      <img alt="" src="/before-anchor.jpg" />
      <section id="model" />
      <ScrollToTop />
    </>
  );
}

function LayoutHarness() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SiteLayout>
      <main>
        <p data-testid="route">{location.pathname}</p>
        <button onClick={() => navigate(-1)}>Gå tilbake</button>
        <button onClick={() => navigate(1)}>Gå frem</button>
      </main>
    </SiteLayout>
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("project fragment navigation", () => {
  it("scrolls to a direct fragment below both sticky bars and corrects an image layout shift", async () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    let targetTop = 400;

    render(
      <MemoryRouter initialEntries={["/projects/headset#model"]}>
        <ScrollHarness />
      </MemoryRouter>,
    );

    mockHeight(document.querySelector(".site-header")!, 72);
    mockHeight(document.querySelector("[data-project-bar]")!, 56);
    vi.spyOn(document.getElementById("model")!, "getBoundingClientRect").mockImplementation(
      () => ({
        x: 0,
        y: targetTop,
        top: targetTop,
        left: 0,
        right: 0,
        bottom: targetTop,
        width: 0,
        height: 0,
        toJSON: () => ({}),
      }),
    );

    await waitFor(() => expect(scrollTo).toHaveBeenCalledWith({ top: 272, behavior: "auto" }));

    targetTop = 500;
    const image = document.querySelector("img")!;
    fireEvent.load(image);

    await waitFor(() => expect(scrollTo).toHaveBeenLastCalledWith({ top: 372, behavior: "auto" }));

    fireEvent.click(screen.getByRole("button", { name: "Til prosjektstart" }));
    await waitFor(() => expect(scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: "auto" }));
    targetTop = 600;
    fireEvent.load(image);
    expect(scrollTo).toHaveBeenCalledTimes(3);
  });

  it("updates the URL for a section click and follows browser-style back navigation", async () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/projects/headset"]}>
        <ScrollHarness />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Modell" }));
    await waitFor(() => expect(screen.getByTestId("location")).toHaveTextContent("#model"));

    fireEvent.click(screen.getByRole("button", { name: "Tilbake" }));
    await waitFor(() => expect(screen.getByTestId("location")).toHaveTextContent("/projects/headset"));
    expect(screen.getByTestId("location")).not.toHaveTextContent("#model");
  });
});

describe("mobile navigation accessibility", () => {
  it("returns focus after history navigation only when focus was in the open menu", async () => {
    render(
      <MemoryRouter initialEntries={["/work/", "/about/"]} initialIndex={1}>
        <LayoutHarness />
      </MemoryRouter>,
    );

    const trigger = screen.getByRole("button", { name: "Åpne meny" });
    const back = screen.getByRole("button", { name: "Gå tilbake" });
    const forward = screen.getByRole("button", { name: "Gå frem" });
    const panel = document.getElementById("mobile-navigation")!;

    fireEvent.click(trigger);
    const closeButton = await within(panel).findByRole("button", { name: "Lukk meny" });
    await waitFor(() => expect(closeButton).toHaveFocus());
    within(screen.getByRole("navigation", { name: "Mobilmeny" }))
      .getByRole("link", { name: "Arbeid" })
      .focus();
    fireEvent.click(back);

    await waitFor(() => expect(screen.getByTestId("route")).toHaveTextContent("/work/"));
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(panel).toHaveAttribute("inert");

    fireEvent.click(trigger);
    const nextCloseButton = await within(panel).findByRole("button", { name: "Lukk meny" });
    await waitFor(() => expect(nextCloseButton).toHaveFocus());
    forward.focus();
    fireEvent.click(forward);

    await waitFor(() => expect(screen.getByTestId("route")).toHaveTextContent("/about/"));
    expect(forward).toHaveFocus();
    expect(panel).toHaveAttribute("inert");

    fireEvent.click(back);
    await waitFor(() => expect(screen.getByTestId("route")).toHaveTextContent("/work/"));
    expect(forward).toHaveFocus();
  });

  it("removes the closed panel from focus, closes with Escape and returns focus", async () => {
    render(
      <MemoryRouter initialEntries={["/work/"]}>
        <LayoutHarness />
      </MemoryRouter>,
    );

    const trigger = screen.getByRole("button", { name: "Åpne meny" });
    const panel = document.getElementById("mobile-navigation")!;
    expect(panel).toHaveAttribute("inert");
    expect(panel).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(trigger);
    const closeButton = await within(panel).findByRole("button", { name: "Lukk meny" });
    await waitFor(() => expect(closeButton).toHaveFocus());

    const mobileNavigation = screen.getByRole("navigation", { name: "Mobilmeny" });
    const lastLink = within(mobileNavigation).getByRole("link", { name: "Kontakt" });
    fireEvent.keyDown(closeButton, { key: "Tab", shiftKey: true });
    expect(lastLink).toHaveFocus();
    fireEvent.keyDown(lastLink, { key: "Tab" });
    expect(closeButton).toHaveFocus();

    act(() => fireEvent.keyDown(document, { key: "Escape" }));
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(panel).toHaveAttribute("inert");

    fireEvent.click(trigger);
    const openMobileNavigation = await screen.findByRole("navigation", { name: "Mobilmeny" });
    fireEvent.click(within(openMobileNavigation).getByRole("link", { name: "Om meg" }));

    await waitFor(() => expect(screen.getByTestId("route")).toHaveTextContent("/about/"));
    await waitFor(() => expect(trigger).toHaveAttribute("aria-expanded", "false"));
    expect(panel).toHaveAttribute("inert");
  });
});
