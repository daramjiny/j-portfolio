import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/app/pages/Home";
import { ProjectDetail } from "@/app/pages/ProjectDetail";
import { AdTemplate } from "@/app/pages/AdTemplate";
import { ScrollToTop } from "@/app/components/ScrollToTop"; // We'll create this helper

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/ad-template" element={<AdTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}
