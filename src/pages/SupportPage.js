import {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Support from "../components/Support/Support";
function SupportPage() {
  useEffect(()=>{
    document.title = "Support - Spotify"
  },[])
  return (
    <>
      <Header />
      <Support />
      <Footer />
    </>
  );
}

export default SupportPage;
