import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import sider from "@/content/sider.json";

export default function SideMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const side = sider.find((entry) => entry.path === path) || sider.find((entry) => entry.path === "/404")!;
    const url = `https://bragesteen.no${side.path === "/" ? "/" : side.path}`;
    document.title = side.title;
    function meta(attribute: "name" | "property", name: string, content: string) {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, name); document.head.append(element); }
      element.content = content;
    }
    meta("name", "description", side.description);
    meta("name", "robots", side.noindex ? "noindex, follow" : "index, follow");
    meta("property", "og:title", side.title);
    meta("property", "og:description", side.description);
    meta("property", "og:url", url);
    meta("property", "og:image", `https://bragesteen.no${side.image}`);
    meta("name", "twitter:title", side.title);
    meta("name", "twitter:description", side.description);
    meta("name", "twitter:image", `https://bragesteen.no${side.image}`);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.append(canonical); }
    canonical.href = url;
  }, [pathname]);
  return null;
}
