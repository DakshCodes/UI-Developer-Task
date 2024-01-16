import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'

const Tabbar = () => {
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(".radio-inputs", {
                opacity: 0,
                y: 10,
                duration: 0.2,
                delay: 2.9,
                ease: 'sine.out',
            }).from(".radio-inputs label", {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.2,
                ease: 'sine.out',
            }).from(".divider", {
                width: 0,
                duration: 2,
                ease: 'sine.out',
            })
        })
        return () => context.revert();
    }, [])


    return (
        <div>
            <div className="radio-inputs ">
                <label className="radio ">
                    <input type="radio" name="radio" defaultChecked />
                    <span className="name">Trending</span>
                </label>
                <label className="radio">
                    <input type="radio" name="radio" />
                    <span className="name">Top</span>
                </label>
            </div>
        </div>
    )
}

export default Tabbar
