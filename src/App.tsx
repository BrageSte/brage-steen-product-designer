import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import HeadsetProject from "@/pages/projects/HeadsetProject";
import SortingGuideProject from "@/pages/projects/SortingGuideProject";
import SeaweedProject from "@/pages/projects/SeaweedProject";
import AvfallsportalenProject from "@/pages/projects/AvfallsportalenProject";
import BSClimbingProject from "@/pages/projects/BSClimbingProject";
import GripSenseProject from "@/pages/projects/GripSenseProject";
import SideMetadata from "@/components/SideMetadata";
import videresendinger from "@/content/videresendinger.json";

function GammelAdresse({ til }: { til: string }) {
  const { search, hash } = useLocation();
  const [path, fragment] = til.split("#");
  return <Navigate replace to={`${path}${search}${fragment ? `#${fragment}` : hash}`} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SideMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-meg" element={<About />} />
        <Route path="/prosjekter/gripsense" element={<GripSenseProject />} />
        <Route path="/prosjekter/headset" element={<HeadsetProject />} />
        <Route path="/prosjekter/kildesortering" element={<SortingGuideProject />} />
        <Route path="/prosjekter/seaweed" element={<SeaweedProject />} />
        <Route path="/prosjekter/avfallsportalen" element={<AvfallsportalenProject />} />
        <Route path="/prosjekter/bs-climbing" element={<BSClimbingProject />} />
        {Object.entries(videresendinger).map(([fra, til]) => <Route key={fra} path={fra} element={<GammelAdresse til={til} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
