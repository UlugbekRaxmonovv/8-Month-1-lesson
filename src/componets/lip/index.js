import { legacy_createStore, combineReducers } from "redux";
import { wishListSlice } from "../lip/Wishlist/Wishlist";

const rootReducer = combineReducers({
    wishListSlice
});

export const store = legacy_createStore(rootReducer);
