import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing-page/landing-page";
import CompanyDetailPage from "../pages/company-detail-page/company-detail-page";

export default function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/company/:id" element={<CompanyDetailPage />} />
      </Routes>
    </Router>
  );
}
