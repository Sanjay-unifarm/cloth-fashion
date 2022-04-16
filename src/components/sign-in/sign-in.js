import React,{useState,useEffect} from "react";
import {FormInput} from "../formInput/formInput"
import {CustomButton} from "../custom-button/customButton"
import {auth} from "../../firebase/firebase.utils.js"
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {saveUserDetails} from "../../firebase/firebase.utils"
import './sign-in.scss'



export const SignIn = ()=>{
    const [signInDetails,setSignInDetails]=useState({
        email:"",
        password:"",
    });

    const [userDetails,setUserDetails]=useState({
        displayName:"",
        email:"",
    })

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
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then((res)=>{
            console.log("user Data",res.user.displayName)
            setUserDetails({displayName:res.user.displayName,email:res.user.email})
           
           
            saveUserDetails({displayName:res.user.displayName, email:res.user.email}).then((res)=>{
                console.log(res,"response from userDetails")    
                return res
            }).catch((err)=>{
                console.log(err,"error")    
                return err
            })
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    // useEffect(()=>{
    //     console.log(userDetails)
    // },[userDetails])

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