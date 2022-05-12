import './checkoutItem.scss'
import {removeCartAction } from '../../actions/addToCartAction'
import { useDispatch } from 'react-redux'
export const CheckoutItem = ({cartItem:{name,price,imageUrl,id}})=>{
   const dispatch = useDispatch();
  
   const handleRemove = (id)=>{
       dispatch(removeCartAction(id))
   }
   
    return(
        
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="cartItem image"/>
            </div>

            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>handleRemove(id)} > X</span>


        </div>
    )
}