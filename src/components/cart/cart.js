import  {useEffect,useState} from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {useSelector} from 'react-redux'
import './cart.scss'

export const Carticon = (props)=>{
    const itemCart  = useSelector((state)=>state.addToCartReducer.cartItem);
    console.log(itemCart.length)
    


    return(
          <div className="cart-icon" onClick={props.handleClick} >
              <ShoppingIcon className="shopping-icon" />
              <span className='item-count'>{itemCart.length}</span>
          </div>  
    )
}