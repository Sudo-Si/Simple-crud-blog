import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import {auth, provider}from "../firbase-config";
import {useNavigate} from "react-router-dom"
import gIcon from "../google.svg"

export default function Login({isAuth, setIsAuth}) {
let navigate = useNavigate();
    const signInWithGoogle =() =>{
        signInWithPopup(auth, provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true)
            navigate("/");
        });
    };

   
  return (
    <div className='loginPage'>
        <p>Sign in with google to continue </p>
       
     <button className='login-with-google-btn'onClick={signInWithGoogle}><img src={gIcon} alt=""/> Signin with Google </button> 
    </div>
  )
}

