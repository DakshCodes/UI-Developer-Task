import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://i.pinimg.com/564x/9b/64/f6/9b64f62f72e6c9168312b7de666ecad3.jpg",
    "https://i.pinimg.com/564x/c4/46/da/c446da4ad6f4b801ca175d3dee59f292.jpg",
    "https://i.pinimg.com/736x/f0/ed/24/f0ed2409940b8b99ba0a945e5a3d171c.jpg",
    "https://i.pinimg.com/736x/a6/3e/83/a63e83d9b867b14183b947312788e420.jpg",
    "https://i.pinimg.com/564x/a0/9d/ae/a09daee11bf2f690437b7b1771dbf0be.jpg",
    "https://i.pinimg.com/564x/35/5b/03/355b0369b4f683a98037acdd357d8e30.jpg",
    "https://i.pinimg.com/564x/11/33/b6/1133b6a7bafe6d158c82400cc2c1ce15.jpg",
    "https://i.pinimg.com/736x/c3/46/5a/c3465a4de919f02243b2cfe220cea4fd.jpg",
];

const Featured = () => {
    useLayoutEffect(() => {
        gsap.set(".title", {
            opacity: 0,
            y: 10,
        })
        gsap.set(".grid-item", {
            opacity: 0,
            y: 20,
        })

        gsap.to(".title", {
            opacity: 1,
            y: 0,
            duration: 0.2,
            delay: 0.3,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: ".title",
                start: "top 80%",
                end: "bottom 50%",
                scrub: true
            }
        });

        gsap.to(".grid-item", {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.4,
            delay: 0.2,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: ".grid-item",
                start: "-10% 80%",
                end: "bottom 50%",
                scrub: true
            }
        });
    }, []);

    return (
        <div className='featured-main'>
            <header className="header">
                <div className="content">
                    <h1 className="title">Featured</h1>
                </div>
            </header>
            <div className="container">
                {images.map((imageUrl, index) => (
                    <div className="grid-item" key={index}>
                        <div className="item-style">
                            <div className="thumb">
                                <a href="#">
                                    <img src={imageUrl} alt={`alt${index}`} />
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="title">
                                    <a href="#">Pouoq NFT #{index + 1}</a>
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
                ))}
            </div>
        </div>
    );
}

export default Featured;
