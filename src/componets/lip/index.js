import { legacy_createStore, combineReducers } from "redux";
import { wishlistReducer } from "../lip/Wishlist/Wishlist";

const rootReducer = combineReducers({
    wishlistReducer 
});

export const store = legacy_createStore(rootReducer);
