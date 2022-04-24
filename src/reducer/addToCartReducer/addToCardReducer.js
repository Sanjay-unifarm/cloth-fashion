
const INTIAL_STATE = {
    cartItem:[]
}

export const addToCartReducer = (state=INTIAL_STATE, action) =>{

    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItem: [...state.cartItem,action.payload]
            }
        default:
            return state;
    }

}