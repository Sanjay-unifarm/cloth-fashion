import React,{useState} from "react";
import {FormInput} from "../formInput/formInput"
import { CustomButton } from "../custom-button/customButton";
import '../sign-in/sign-in.scss'
import {auth} from "../../firebase/firebase.utils"
import { saveUserDetails } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const SignUp = ()=>{

    const [signUpDetails,setSignUpDetails]=useState({
        displayName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const handleChange =(e)=>{
        const{name,value}=e.target;
        setSignUpDetails({...signUpDetails,[name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(signUpDetails.password !== signUpDetails.confirmPassword){
               alert("password does not match");
               return; 
        }

        try{
           const {email,password,displayName} = signUpDetails
            const {user} =createUserWithEmailAndPassword(auth,email,password)
            saveUserDetails(user,{displayName:displayName}).then((res)=>{
                console.log("res",res)
            }).catch((err)=>{
                console.log("err",err)
            })
            signUpDetails({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:"",

            })
        }
        catch(error){
            
            console.log(error)

        }


        // saveUserDetails(signUpDetails).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err )
        // })
    }
    return(
        <>
            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={handleSubmit} >
                    <FormInput
                        name="displayName"
                        type="text"
                        label="display Name"
                        value={signUpDetails.displayName}
                        handleChange={handleChange}
                        
                    />
                    <FormInput
                        name="email"
                        label="email"
                        type="email"
                        value={signUpDetails.email}
                        handleChange={handleChange}
                        
                    />
                    <FormInput
                        name="password"
                        label="password"
                        type="password"
                        value={signUpDetails.password}
                        handleChange={handleChange}
                        
                    />
                    <FormInput
                        name="confirmPassword"
                        label="confirm password"
                        type="password"
                        value={signUpDetails.confirmPassword}
                        handleChange={handleChange}

                        
                    />
                    <CustomButton className="custom-button"  btnLabelText="sign up" />

                </form>



            </div>
        </>
    )
}