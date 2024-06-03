
import React, { useState, useEffect } from 'react';
import './Main.css'
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import axios  from '../Api/index';
import Loading from '../Loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch } from 'react-redux';
import {toggleWishlistItem} from '../../componets/lip/actions/action'


const Card = () => {
    const dispatch = useDispatch();


    const [products, setProducts] = useState([]);
    const [number, setNumber] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/products?limit=10&skip=${number}`)
            .then(res => {
                setProducts(res.data?.products);
            })
            .finally(() => setLoading(false));
    }, [number]);

    const fetchData = () => {
        setNumber(prevNumber => prevNumber + 1);
        axios.get(`/products?limit=10&skip=${number + 1}`)
            .then(res => {
                setProducts(prevProducts => [...prevProducts, ...res.data?.products]);
            });
    };

    const productItems = products.map((item) => (
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
        <>

         
       
            <div className='container'>
                {loading ? <Loading /> : null}
                <div className="wrapper">
                    {productItems}
                </div>
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<Loading />}
                />
            </div>
        </>
    );
};

export default Card;
