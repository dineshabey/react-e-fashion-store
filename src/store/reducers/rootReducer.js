import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    cartReducer,
    productStore: productReducer,
});

export default rootReducer;
