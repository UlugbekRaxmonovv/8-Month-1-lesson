import React from 'react';
import { useSelector } from 'react-redux'
import {useDispatch } from 'react-redux';
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {toggleWishlistItem} from '../../componets/lip/actions/action'
const Wishlist = () => {
    const dispatch = useDispatch();
    const cards = useSelector(s => s.wishlistReducer)
    const productItems = cards.map((item) => (
        <div className="Products" key={item.id}>
            <div className="card">
                <div className="card_all">
                    <IoMdHeart onClick={() => dispatch(toggleWishlistItem(item))}/> <br />
                </div>
                <div className="card_all">
                    <FaShoppingCart />
                </div>
            </div>
            <div className="Products_all">
                <div className="all_img">
                    <img src={item.images[0]} alt="" />
                </div>
                <div className="all_img">
                    <img src={item.images[1]} alt="" />
                </div>
            </div>
            <p>Женское Открытое кольцо с фианитом, золотистое/серебристое Ювелирное Украшение</p>
            <div className="star">
                <div className="star_all">
                    <FaStar />
                </div>
                <div className="star_all">
                    <p>4,9</p>
                </div>
                <div className="star_all">
                    <p>208 купили</p>
                </div>
            </div>
            <h4>12 540.27 UZS</h4>
        </div>
    ));
    return (
        <div className='container'>
             <div className="wrapper">
                    {productItems}
                </div>
        </div>
    );
}

export default Wishlist;
