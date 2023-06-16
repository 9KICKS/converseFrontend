import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/authentication/components/registerUser";
import Login from "./pages/authentication/components/loginUser";
import PrivacyPolicy from "./pages/authentication/components/privacyPolicy";
import TermsOfService from "./pages/authentication/components/termsAndConditions";
import ForgotPassword from "./pages/authentication/components/forgotPassword";
import PasswordResetSent from "./pages/authentication/components/passwordResetResponse";
import PasswordResetConfirmation from "./pages/authentication/components/passwordResetConfirmation";
import PasswordResetComplete from "./pages/authentication/components/passwordResetComplete";

function AppRoute() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset-sent" element={<PasswordResetSent />} />
          <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
          <Route path="/password-reset-complete" element={<PasswordResetComplete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;
