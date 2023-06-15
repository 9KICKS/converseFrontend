import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/authentication/components/registerUser";
import Login from "./pages/authentication/components/loginUser";
import PrivacyPolicy from "./pages/authentication/components/privacyPolicy";
import TermsOfService from "./pages/authentication/components/termsAndConditions";

function AppRoute() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;
