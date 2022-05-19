import {SHOP_DATA} from '../../pages/hatsPage/shopData'



const intialState = {
    collection : SHOP_DATA,
}

export const shopDataReducer = (state=intialState,action)=>{
    switch(action.type){
        default:
            return state;       
    }
}
