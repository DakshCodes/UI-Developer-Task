import gsap from 'gsap'
import React, { useLayoutEffect } from 'react'
import AuctionCard from '../Ui/AuctionCard'

const AuctionSection = () => {
    useLayoutEffect(() => {
        const context = gsap.context(() => {

            gsap.set(".auction-cards .aution-card", {
                opacity: 0,
                y: 10,
            })
            gsap.set(".wallet-card ", {
                opacity: 0,
                y: 10,
            })
            const tl = gsap.timeline();
            tl.from(".auction-head .auction-title", {
                opacity: 0,
                y: 10,
                duration: 0.2,
                delay: 3,
                ease: 'sine.out',
            }).from(".auction-head .auction-arrow", {
                opacity: 0,
                x: 10,
                duration: 0.2,
                ease: 'sine.out',
            }).to(".auction-cards .aution-card", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.1,
                ease: 'sine.out',
            }).to(".wallet-card ", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.1,
                ease: 'sine.out',
            })
        })
        return () => context.revert();
    }, [])
    return (
        <div className='aution-main'>
            <div className="auction-head">
                <div className="auction-title">
                    <h1>Popular NFT’s Live Auction</h1>
                </div>
                <div className="auction-arrow">
                    Show More
                    <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#14befc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                </div>
            </div>
            <div className="auction-cards">
                <AuctionCard />
                <AuctionCard />
            </div>
        </div>
    )
}

export default AuctionSection
