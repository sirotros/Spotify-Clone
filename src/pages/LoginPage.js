import {useEffect} from 'react'
import Login from '../components/Login/Login'
function LoginPage() {
  useEffect(()=>{
    document.title = "Login - Spotify"
  },[])
  return (
    <>
      <Login/>
    </>
  )
}

export default LoginPage