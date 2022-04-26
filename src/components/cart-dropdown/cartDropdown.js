import { CustomButton } from "../custom-button/customButton";
import {CartItem} from '../cart-Item/cartItem'
import {useSelector}  from 'react-redux';
import { useNavigate } from "react-router-dom";
import './cartDropdown.scss'

export const CartDropdown = ()=>{

    const navigate = useNavigate();
    const getCartItems = useSelector((state)=>state.addToCartReducer.cartItem)

        const checkout = ()=>{
                navigate("/checkout")
        }

    return(
        <div className="cart-dropdown">
            
            <div className="cart-items">
                {
                 
                  getCartItems.length ?

                  getCartItems.map((cartItem)=>{
                    return (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                })
                  :
                  
                   ( <span className="empty-message">Your cart is empty</span>)
                   
                    
                }

            </div>


            <CustomButton className="button" onClick={checkout}  btnLabelText="GO TO CHECKOUT"/>
        </div>
    )
}