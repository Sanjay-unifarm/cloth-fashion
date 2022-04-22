import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart.scss'

export const Carticon = (props)=>{
    return(
          <div className="cart-icon" onClick={props.handleClick} >
              <ShoppingIcon className="shopping-icon" />
              <span className='item-count'>0</span>
          </div>  
    )
}