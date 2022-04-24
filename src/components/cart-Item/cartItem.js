import './cartItem.scss'
export const CartItem = (props)=>{
    const {imageUrl,price,name,quantity} = props.item
    return(
        <>
            <div className="cart-item">
                <div className="image-container">
                    <img src={imageUrl} alt="itemImage"/>
                </div>
                <div className='item-details'>
                    <span className="name" >{name}</span>
                    <span className="price" >${price}</span>
                </div>
            </div>
        </>
    )
}