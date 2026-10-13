import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Klientside-navigasjon beholder scrollposisjonen; start nye sider på toppen
// (men la #anker-lenker scrolle selv).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
