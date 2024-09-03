import "./App.css";
import Layout from "./components/layout/layout";
import CompanyDetailPage from "./pages/company-detail-page/company-detail-page";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Layout>
      {/* <LandingPage /> */}
      <CompanyDetailPage/>
    </Layout>
  );
}

export default App;
