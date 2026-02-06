import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import HeadsetProject from "@/pages/projects/HeadsetProject";
import SortingGuideProject from "@/pages/projects/SortingGuideProject";
import SeaweedProject from "@/pages/projects/SeaweedProject";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/projects/headset" element={<HeadsetProject />} />
        <Route path="/projects/sorting-guide" element={<SortingGuideProject />} />
        <Route path="/projects/seaweed" element={<SeaweedProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
