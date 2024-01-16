import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'

const PreLoader = () => {

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            // Loader animations
            gsap.to(".digit", {
                top: "-150px",
                stagger: {
                    amount: 0.25,
                },
                delay: 6,
                duration: 1,
                ease: "power4.inOut",
            });

            gsap.from(".loader-1", {
                width: 0,
                duration: 1,
                ease: "power2.inOut",
            });

            gsap.from(".loader-2", {
                width: 0,
                duration: 1,
                ease: "power2.inOut"
            });
            gsap.to(".loader", {
                background: "none",
                duration: 0.1,
            });

            gsap.to(".loader-1", {
                rotate: 90,
                y: -50,
                duration: 0.5,
                delay: 1,
            });

            gsap.to(".loader-2", {
                x: -75,
                y: 75,
                duration: 0.5
            }, "<");

            gsap.to(".loader", {
                scale: 40,
                duration: 1,
                delay: 1.6,
                ease: "power2.inOut"
            });

            gsap.to(".loader", {
                rotate: 45,
                y: 500,
                x: 2000,
                duration: 1,
                delay: 1.6,
                ease: "power2.inOut"
            });

            gsap.to(".loading-screen", {
                opacity: 0,
                width: 0,
                duration: 0.5,
                delay: 2,
                ease: "power1.inOut"
            });

        })
        return () => context.revert();
    }, [])
    return (
        <div className="loading-screen">
            <div className="loader">
                <div className="loader-1 bar" />
                <div className="loader-2 bar" />
            </div>
        </div>
    )
}

export default PreLoader
