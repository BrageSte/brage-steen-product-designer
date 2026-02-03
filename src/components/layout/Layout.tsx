import Navbar from "./Navbar";
import Footer from "./Footer";
import GlowBackground from "@/components/ui/GlowBackground";

interface LayoutProps {
  children: React.ReactNode;
  showGlow?: boolean;
}

const Layout = ({ children, showGlow = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {showGlow && <GlowBackground />}
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
