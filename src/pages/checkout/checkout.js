import './checkout.scss'
import {useSelector} from 'react-redux'
import {CheckoutItem} from '../../components/checkoutItem/checkoutItem'

export const Checkout = ()=>{
    const getCartItem = useSelector((state)=>state.addToCartReducer.cartItem);
    console.log(getCartItem)

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
                    <span > Total:$0</span>
                </div>

            </div>

        </>
    )
}