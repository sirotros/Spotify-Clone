import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import Download from "./components/Download/Download";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Premium from "./components/Premium/Premium";
import Support from "./components/Support/Support";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="premium" element={<Premium />} />
          <Route path="support" element={<Support />} />
          <Route path="download" element={<Download />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
