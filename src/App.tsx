import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { DataAnalysis } from "./pages/services/DataAnalysis";
import { ProjectManagement } from "./pages/services/ProjectManagement";
import { MachineLearning } from "./pages/services/MachineLearning";
import { ArtificialIntelligence } from "./pages/services/ArtificialIntelligence";
import { BusinessCentral } from "./pages/services/BusinessCentral";
import { Training } from "./pages/services/Training";
import { DataGovernance } from "./pages/services/DataGovernance";
import { UserExperience } from "./pages/services/UserExperience";
import { BlogPost } from "./pages/blog/BlogPost";

// ScrollToTop component to handle automatic scrolling on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/data-analysis"
              element={<DataAnalysis />}
            />
            <Route
              path="/services/project-management"
              element={<ProjectManagement />}
            />
            <Route
              path="/services/machine-learning"
              element={<MachineLearning />}
            />
            <Route
              path="/services/artificial-intelligence"
              element={<ArtificialIntelligence />}
            />
            <Route
              path="/services/business-central"
              element={<BusinessCentral />}
            />
            <Route
              path="/services/training-and-development"
              element={<Training />}
            />
            <Route
              path="/services/data-governance"
              element={<DataGovernance />}
            />
            <Route
              path="/services/user-experience-design"
              element={<UserExperience />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}