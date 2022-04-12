import React,{useState} from "react";
import {FormInput} from "../formInput/formInput"
import {CustomButton} from "../custom-button/customButton"
import {auth} from "../../firebase/firebase.utils.js"
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './sign-in.scss'



export const SignIn = ()=>{
    const [signInDetails,setSignInDetails]=useState({
        email:"",
        password:"",
    });

    const handleChange =(e)=>{
        const {value,name}=e.target;
        setSignInDetails({...signInDetails,[name]:value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(signInDetails)

    }

    const signInWithGoogle =(e)=>{
        e.preventDefault();
        console.log("called")
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <>
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign  in with email and password</span>


            <form onSubmit={handleSubmit} >
                <FormInput
                    name="email"
                    type="email"
                    value={signInDetails.email}
                    handleChange={handleChange}
                    label='email'
                />
                <FormInput
                    name="password"
                    type="password"
                    value={signInDetails.password}
                    handleChange={handleChange}
                    label='password'
                />
                <div className="btn-container">
                <CustomButton className="custom-button"btnLabelText="Submit" />
                <CustomButton onClick={signInWithGoogle} className="googleSignin" btnLabelText="Sign In With Google" />
                </div>
            </form> 

            </div>
        </>
    )
}