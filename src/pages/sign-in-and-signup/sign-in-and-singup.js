import "./sign-in-and-sign-up.scss"
import {SignIn} from "../../components/sign-in/sign-in"
import {SignUp} from "../../components/sign-up/sign-up"
export const Auth = ()=>{
    return (
        <div className="auth">
                <SignIn/>
                <SignUp/>
        </div>
    )
}