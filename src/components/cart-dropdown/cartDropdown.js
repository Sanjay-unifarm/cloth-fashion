import { CustomButton } from "../custom-button/customButton";
import './cartDropdown.scss'

export const CartDropdown = ()=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton className="button" btnLabelText="GO TO CHECKOUT"/>
        </div>
    )
}