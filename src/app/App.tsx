import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/app/pages/Home";
import { ProjectDetail } from "@/app/pages/ProjectDetail";
import { ScrollToTop } from "@/app/components/ScrollToTop"; // We'll create this helper

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
