
const INTIAL_STATE = {
    cartItem:[]
}

export const addToCartReducer = (state=INTIAL_STATE, action) =>{
console.log("add to cart called");
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItem: [...state.cartItem,action.payload]
            }

        case 'REMOVE_CART_ITEM':
            const removeDItem = state.cartItem.filter((currItem)=>{
                return currItem.id !== action.payload
            })
            console.log(removeDItem);
            return {
                ...state,
                cartItem: removeDItem,
            }

        default:
            return state;
    }

}

