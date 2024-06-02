import React from 'react';
import { useSelector } from 'react-redux';

const Wishlist = () => {
    const wishlist = useSelector(s => s.wishListSlice.value)
    console.log(wishlist);
    return (
        <div>
            <h1>Wishlist</h1>
        </div>
    );
}

export default Wishlist;
