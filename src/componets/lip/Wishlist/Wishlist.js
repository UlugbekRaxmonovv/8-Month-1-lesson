import { WISHLIST } from "../actions/action.js";

const initialState = JSON.parse(localStorage.getItem('wishlist')) || [];

export const wishListSlice = (state = initialState, action) => {
    switch (action.type) {
        case WISHLIST:
            const inx = state.findIndex(el => el.id === action.payload.id);
            let newState;
            if (inx < 0) {
                newState = [...state, action.payload];
            } else {
                newState = state.filter(el => el.id !== action.payload.id);
            }
            localStorage.setItem('wishlist', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};
