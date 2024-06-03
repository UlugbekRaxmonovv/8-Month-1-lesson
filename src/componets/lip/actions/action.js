export const WISHLIST = "WISHLIST";
export const INCREMENT_CART_QUANTITY = "INCREMENT_CART_QUANTITY";
export const DECREMENT_CART_QUANTITY = "DECREMENT_CART_QUANTITY";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CARD = "CARD";


export const toggleWishlistItem = (payload) => {
    return {
        type: WISHLIST,
        payload,
      
    };
};

export const toggleCardItem = (payload) => {
    return {
        type: CARD,
        payload,
      
    };
};

export const toggleCardItem1 = (payload) => {
    return {
        type: INCREMENT_CART_QUANTITY,
        payload,
      
    };
};

export const toggleCardItem2 = (payload) => {
    return {
        type: DECREMENT_CART_QUANTITY,
        payload,
      
    };
};



export const toggleCardItem3 = (payload) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload,
      
    };
};
