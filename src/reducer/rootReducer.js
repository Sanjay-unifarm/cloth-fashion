import { combineReducers } from "redux"
import {userReducer} from './user-reducer/userReducer';
import {addToCartReducer} from './addToCartReducer/addToCardReducer';
export const RootReducer = combineReducers(
    {
        userReducer,
        addToCartReducer,
    }
);