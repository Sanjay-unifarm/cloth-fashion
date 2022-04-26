import './checkoutItem.scss'
export const CheckoutItem = ({cartItem:{name,price,imageUrl}})=>{
    return(
        
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="cartItem image"/>
            </div>

            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="remove-button"> X</span>


        </div>
    )
}