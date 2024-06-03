import {CARD, INCREMENT_CART_QUANTITY, DECREMENT_CART_QUANTITY, REMOVE_ITEM_FROM_CART } from '../actions/action';

const initialState = {
    value: []
};

const LiaIdCardAltSolid = (state, action) => {
    const index = state.value.findIndex(el => el?.id === action?.payload?.id);
    if (index < 0) {
        const newState = [...state.value, { ...action.payload, quantity: 1 }];
        localStorage.setItem("carts", JSON.stringify(newState));
        return { ...state, value: newState };
    }
    return state;
};

const incrementCartQuantity = (state, action) => {
    const index = state.value.findIndex(el => el?.id === action?.payload?.id);
    if (index >= 0) {
        const newState = state.value.map((item, idx) => 
            idx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("carts", JSON.stringify(newState));
        return { ...state, value: newState };
    }
    return state;
};

const decrementCartQuantity = (state, action) => {
    const index = state.value.findIndex(el => el?.id === action?.payload?.id);
    if (index >= 0 && state.value[index].quantity > 1) {
        const newState = state.value.map((item, idx) => 
            idx === index ? { ...item, quantity: item.quantity - 1 } : item
        );
        localStorage.setItem("carts", JSON.stringify(newState));
        return { ...state, value: newState };
    }
    return state;
};

const removeItemFromCart = (state, action) => {
    const newState = state.value.filter(el => el.id !== action.payload.id);
    localStorage.setItem("carts", JSON.stringify(newState));
    return { ...state, value: newState };
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARD:
            return LiaIdCardAltSolid(state, action);
        case INCREMENT_CART_QUANTITY:
            return incrementCartQuantity(state, action);
        case DECREMENT_CART_QUANTITY:
            return decrementCartQuantity(state, action);
        case REMOVE_ITEM_FROM_CART:
            return removeItemFromCart(state, action);
        default:
            return state;
    }
};
