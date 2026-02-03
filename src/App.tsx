import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Work from "./pages/Work";
import SortingGuide from "./pages/work/SortingGuide";
import SortingGuidePrototype from "./pages/work/SortingGuidePrototype";
import SortingGuideGigamap from "./pages/work/SortingGuideGigamap";
import Avfallsportalen from "./pages/work/Avfallsportalen";
import Headset from "./pages/work/Headset";
import Seaweed from "./pages/work/Seaweed";
import Crimpblock from "./pages/work/Crimpblock";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/sorting-guide" element={<SortingGuide />} />
          <Route path="/work/sorting-guide/prototype" element={<SortingGuidePrototype />} />
          <Route path="/work/sorting-guide/gigamap" element={<SortingGuideGigamap />} />
          <Route path="/work/avfallsportalen" element={<Avfallsportalen />} />
          <Route path="/work/headset" element={<Headset />} />
          <Route path="/work/seaweed" element={<Seaweed />} />
          <Route path="/work/crimpblock" element={<Crimpblock />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
