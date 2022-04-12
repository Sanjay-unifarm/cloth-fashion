import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import './header.scss'
export const Header = (props)=>{
    return(
        <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="options">
                    <Link className="option" to="/hatsPage">
                    Shop
                    </Link>
                    <Link className="option" to="/contact">
                    Contact
                    </Link>
                       {
                           props.currentUser ?
                            <Link className="option" onClick={()=>auth.signOut()} to="/"  >SIGN OUT</Link> :
                            <Link className="option" to="/signin">SIGN IN</Link> 
                       } 


                    {/* <Link className="option" to="/contact">
                    Sign In
                    </Link> */}
                </div>
        </div>
    )
}