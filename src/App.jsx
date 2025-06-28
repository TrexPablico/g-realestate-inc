import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/ServicePage";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";

// Import your new individual service pages
import SurveyPage from "./Components/Services/SurveyPage";
import AppraisalPage from "./Components/Services/AppraisalPage";
import SalesPage from "./Components/Services/SalesPage";
import TransferPage from "./Components/Services/TransferPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* Individual service routes */}
        <Route path="/services/survey" element={<SurveyPage />} />
        <Route path="/services/appraisal" element={<AppraisalPage />} />
        <Route path="/services/sales" element={<SalesPage />} />
        <Route path="/services/transfer" element={<TransferPage />} />
      </Routes>
    </Router>
  );
}

export default App;
