import React,{useState} from "react";
import {FormInput} from "../formInput/formInput"
import {CustomButton} from "../custom-button/customButton"
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
    return(
        <>
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign  in with email and password</span>


            <form onSubmit={handleSubmit}>

                <FormInput
                    name="email"
                    type="email"
                    // placeholder="enter email"
                    value={signInDetails.email}
                    handleChange={handleChange}
                    label='email'
                />
                <FormInput
                    name="password"
                    type="password"
                    // placeholder="enter email"
                    value={signInDetails.password}
                    handleChange={handleChange}
                    label='password'
                />
                <CustomButton btnLabelText="Submit" />
                {/* <button type="submit">Submit Form</button> */}
            </form>

            </div>
        </>
    )
}