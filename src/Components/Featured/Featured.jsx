import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Featured = () => {
    useLayoutEffect(() => {
    
    }, []);


    return (
        <div className='featured-main'>
            <header className="header">
                <div className="content">
                    <h1 className="title">Featured</h1>
                </div>
            </header>
            <div className="container">
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/564x/9b/64/f6/9b64f62f72e6c9168312b7de666ecad3.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Pouoq NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/564x/c4/46/da/c446da4ad6f4b801ca175d3dee59f292.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Nakalo That NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/736x/f0/ed/24/f0ed2409940b8b99ba0a945e5a3d171c.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Pouoq NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/736x/a6/3e/83/a63e83d9b867b14183b947312788e420.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Pouoq NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/564x/a0/9d/ae/a09daee11bf2f690437b7b1771dbf0be.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Pouoq NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="item-style">
                        <div className="thumb">
                            <a href="#">
                                <img src="https://i.pinimg.com/564x/35/5b/03/355b0369b4f683a98037acdd357d8e30.jpg" alt="alt" />
                            </a>
                        </div>
                        <div className="content">
                            <h3 className="title">
                                <a href="#">Pouoq NFT #1</a>
                            </h3>
                            <div className="product-owner d-flex-center">
                                <span className="bid-owner">
                                    PRICE: <strong>(2 / 10)</strong>
                                </span>
                                <span className="biding-price d-flex-between">
                                    <i className="ri-arrow-up-line" />
                                    99.1 ETH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
