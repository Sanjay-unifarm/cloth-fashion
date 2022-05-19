import { combineReducers } from "redux"
import {userReducer} from './user-reducer/userReducer';
import {addToCartReducer} from './addToCartReducer/addToCardReducer';
import {directoryData} from './directoryDataReducer/directoryData'
import {shopDataReducer} from './shopDataReducer/shopDataReducer'
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig ={
    key:'root',
    storage,
    whitelist: ['addToCartReducer']
}



export const RootReducer = combineReducers(
    {
        userReducer,
        addToCartReducer,
        directoryData,
        shopDataReducer
    }
);

export default persistReducer(persistConfig,RootReducer);
