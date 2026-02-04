import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <main className="text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground mt-4">Under construction...</p>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <main className="text-center px-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2">Page not found</p>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
