
export const addToCartAction = (payload)=>{
    return {

        type:'ADD_TO_CART',
        payload
    }

}

export const removeCartAction = (payload)=>{

    return {
        type:'REMOVE_CART_ITEM',
        payload
    }
}