import { Component, type ReactNode } from "react";
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

// Error Boundary for catching React errors
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Noe gikk galt</h1>
          <p style={{ color: "#666" }}>
            {this.state.error?.message || "En uventet feil oppstod"}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Last siden på nytt
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
