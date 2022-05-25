import './checkout.scss'
import {useSelector} from 'react-redux'
import {CheckoutItem} from '../../components/checkoutItem/checkoutItem'
import { useEffect,useState } from 'react';
import { StripCheckoutButton } from '../../components/stripe-button/stripeButton';

export const Checkout = ()=>{
    const [price,setPrice] =  useState();
    const getCartItem = useSelector((state)=>state.addToCartReducer.cartItem);
    console.log(getCartItem)

    useEffect(()=>{
        let sum = 0;
        getCartItem.map((prices, i)=>{
            sum += prices.price;
            
        })
       setPrice(sum)
    },[getCartItem])


    return (
        <>
           <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>description</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>remove</span>
                    </div>
                </div>

                {
                    getCartItem.map((item)=>{
                        return (
                           <CheckoutItem cartItem={item} />
                        )

                    })
                }

                <div className="total">
                    <span> Total:${price}</span>
                </div>

                <StripCheckoutButton price={price}/>
            </div>

        </>
    )
}