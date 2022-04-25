import  {useEffect} from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Premium from '../components/Premium/Premium'

function PremiumPage() {
  useEffect(()=>{
    document.title = "Spotify Premium - Get 3 months free - Spotify (US)"
  },[])
  return (
    <>
        <Header/>
        <Premium/>
        <Footer/>
    </>
  )
}

export default PremiumPage