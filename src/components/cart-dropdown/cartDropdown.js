import { CustomButton } from "../custom-button/customButton";
import {CartItem} from '../cart-Item/cartItem'
import {useSelector}  from 'react-redux';
import './cartDropdown.scss'

export const CartDropdown = ()=>{

    const getCartItems = useSelector((state)=>state.addToCartReducer.cartItem)


    return(
        <div className="cart-dropdown">
            
            <div className="cart-items">
                {
                    getCartItems.map((cartItem)=>{
                        return (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )
                    })

                }

            </div>


            <CustomButton className="button" btnLabelText="GO TO CHECKOUT"/>
        </div>
    )
}