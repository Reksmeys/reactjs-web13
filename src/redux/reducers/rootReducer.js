import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    prodReducer: productReducer,
    authReducer: authReducer
})