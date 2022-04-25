import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/HomePage";
import PremiumPage from "./pages/PremiumPage";
import SupportPage from "./pages/SupportPage";
import DownloadPage from "./pages/DownloadPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="premium" element={<PremiumPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
