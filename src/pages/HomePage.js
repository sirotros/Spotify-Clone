import {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

function HomePage() {
  useEffect(()=>{
    document.title = "Listening is everything - Spotify"
  },[])
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
