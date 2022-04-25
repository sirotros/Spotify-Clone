import {useEffect} from "react";
import SingUp from '../components/SignUp/SignUp'
function SignUpPage() {
  useEffect(()=>{
    document.title = "Sign up - Spotify"
  },[])
  return (
    <>
      <SingUp />
    </>
  );
}

export default SignUpPage;
