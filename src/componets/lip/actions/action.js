export const WISHLIST = "WISHLIST";
export const CARD = "CARD";

export const toggleWishlistItem = (payload) => {
    return {
        type: WISHLIST,
        payload,
      
    };
};
