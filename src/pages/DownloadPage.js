import {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Download from "../components/Download/Download";
function DownloadPage() {
  useEffect(()=>{
    document.title = "Windows download - Spotify"
  },[])
  return (
    <>
      <Header />
      <Download />
      <Footer />
    </>
  );
}

export default DownloadPage;
