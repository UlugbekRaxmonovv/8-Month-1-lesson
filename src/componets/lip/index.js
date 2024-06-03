import { legacy_createStore, combineReducers } from "redux";
import { wishlistReducer } from "../lip/Wishlist/Wishlist";
import { cardReducer } from '../lip/Card/Card'

const rootReducer = combineReducers({
    wishlistReducer,
    cardReducer,
    
});

export const store = legacy_createStore(rootReducer);
