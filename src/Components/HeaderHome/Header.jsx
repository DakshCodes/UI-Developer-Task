import gsap from 'gsap'
import React, { useLayoutEffect } from 'react'
import ChipLayout from '../../Layouts/ChipLayout/ChipLayout'
import Search from '../Ui/Search'

const Header = ({ setmobileNavActive, mobileNavActive }) => {
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(".header-main form", {
                opacity: 0,
                x: -100,
                duration: 0.7,
                delay: 2,
                ease: 'sine.out',
            }).from(".chips .chip-main", {
                opacity: 0,
                x: -10,
                duration: 0.4,
                stagger: 0.06,
                ease: 'sine.out',
                delay: -0.2
            }).from(".card .img", {
                opacity: 0,
                x: -10,
                duration: 0.2,
                stagger: 0.06,
                ease: 'sine.out',
                delay: -0.1
            }).from(".card .h1", {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.06,
                ease: 'sine.out',
                delay: -0.1
            }).from(".card .p", {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.06,
                ease: 'sine.out',
                delay: -0.1
            }).from(".card .arrow", {
                opacity: 0,
                y: -10,
                duration: 0.2,
                stagger: 0.06,
                ease: 'sine.out',
                delay: -0.1
            })
        })
        return () => context.revert();
    }, [])

    return (
        <div className='header-main'>
            <Search />
            <div className="chips">
                <ChipLayout>
                    <p className='chip-content'>
                        <svg height={19} viewBox="0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: "  .st0{fill:#E3F2FD;} .st1{fill:#80D8FF;} .st2{fill:#1AD2A4;} .st3{fill:#ECEFF1;} .st4{fill:#55FB9B;} .st5{fill:#BBDEFB;} .st6{fill:#C1AEE1;} .st7{fill:#FF5252;} .st8{fill:#FF8A80;} .st9{fill:#FFB74D;} .st10{fill:#FFF176;} .st11{fill:#FFFFFF;} .st12{fill:#65C7EA;} .st13{fill:#CFD8DC;} .st14{fill:#37474F;} .st15{fill:#78909C;} .st16{fill:#42A5F5;} .st17{fill:#455A64;}  " }} /> <g id="Ethereum_x2C__crypto_x2C__cryptocurrency"> <g id="XMLID_40_"> <g id="XMLID_3638_"> <polygon className="st3" id="XMLID_45_" points="16,1.5 7.3,16 16,30.5 24.7,16 " /> </g> <g id="XMLID_73_"> <polygon className="st13" id="XMLID_50_" points="16,20.3 7.3,16 16,30.5 24.7,16 " /> </g> </g> <g id="XMLID_1535_"> <g id="XMLID_1557_"> <path className="st17" d="M16,31c-0.09,0-0.18-0.02-0.26-0.07c-0.24-0.14-0.31-0.45-0.17-0.69L24.12,16L16,2.47 L7.73,16.26c-0.14,0.24-0.45,0.31-0.69,0.17c-0.24-0.14-0.31-0.45-0.17-0.69l8.7-14.5c0.18-0.3,0.68-0.3,0.86,0l8.7,14.5 c0.09,0.16,0.09,0.36,0,0.51l-8.7,14.5C16.33,30.91,16.17,31,16,31z" id="XMLID_737_" /> </g> <g id="XMLID_1539_"> <path className="st17" d="M16,31c-0.17,0-0.33-0.09-0.43-0.24l-8.7-14.5c-0.14-0.24-0.07-0.54,0.17-0.69 c0.23-0.14,0.54-0.07,0.69,0.17l8.7,14.5c0.14,0.24,0.07,0.54-0.17,0.69C16.18,30.98,16.09,31,16,31z" id="XMLID_736_" /> </g> <g id="XMLID_3278_"> <path className="st17" d="M24.7,16.5c-0.08,0-0.15-0.02-0.22-0.05l-6.66-3.33c-0.25-0.12-0.35-0.42-0.22-0.67 c0.12-0.25,0.42-0.35,0.67-0.22l6.66,3.33c0.25,0.12,0.35,0.42,0.22,0.67C25.06,16.4,24.88,16.5,24.7,16.5z" id="XMLID_735_" /> </g> <g id="XMLID_266_"> <path className="st17" d="M7.3,16.5c-0.18,0-0.36-0.1-0.45-0.28c-0.12-0.25-0.02-0.55,0.22-0.67l6.65-3.33 c0.25-0.12,0.55-0.02,0.67,0.22c0.12,0.25,0.02,0.55-0.22,0.67l-6.65,3.33C7.45,16.48,7.38,16.5,7.3,16.5z" id="XMLID_734_" /> </g> <g id="XMLID_1538_"> <path className="st17" d="M16,31c-0.18,0-0.34-0.09-0.43-0.24l-8.7-14.5c-0.11-0.19-0.09-0.43,0.06-0.6 c0.15-0.16,0.39-0.21,0.59-0.11L16,19.79l8.48-4.24c0.2-0.1,0.44-0.06,0.59,0.11c0.15,0.16,0.18,0.41,0.06,0.6l-8.7,14.5 C16.34,30.91,16.18,31,16,31z M8.61,17.22L16,29.53l7.39-12.31l-7.16,3.58c-0.14,0.07-0.31,0.07-0.45,0L8.61,17.22z" id="XMLID_731_" /> </g> <g id="XMLID_1537_"> <path className="st17" d="M16,20.35c-0.28,0-0.5-0.22-0.5-0.5V5.5C15.5,5.22,15.72,5,16,5s0.5,0.22,0.5,0.5v14.35 C16.5,20.12,16.28,20.35,16,20.35z" id="XMLID_730_" /> </g> <g id="XMLID_1536_"> <path className="st17" d="M16,31c-0.18,0-0.34-0.09-0.43-0.24l-8.7-14.5c-0.09-0.16-0.09-0.36,0-0.51l8.7-14.5 c0.18-0.3,0.68-0.3,0.86,0l8.7,14.5c0.09,0.16,0.09,0.36,0,0.51l-8.7,14.5C16.34,30.91,16.18,31,16,31z M7.88,16L16,29.53 L24.12,16L16,2.47L7.88,16z" id="XMLID_727_" /> </g> </g> </g> </g></svg>
                        3,25 ETH
                    </p>
                </ChipLayout>
                <ChipLayout>
                    <p className='chip-content'>
                        <span id='dot'></span>
                        <svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.9695 2 8.34903 2.72578 7.24822 3.98079C6.16397 5.21692 5.66667 6.87057 5.66667 8.6V10.3333C5.66667 10.5774 5.55716 10.8709 5.27166 11.2498C4.99798 11.6129 4.6427 11.9534 4.25022 12.3296L4.18372 12.3934C3.49997 13.0494 3 13.9996 3 15.1333C3 16.67 4.19824 18 5.77778 18H18.2222C19.8018 18 21 16.67 21 15.1333C21 13.9996 20.5 13.0494 19.8163 12.3934L19.7498 12.3296L19.7497 12.3296C19.3573 11.9534 19.002 11.6129 18.7283 11.2498C18.4428 10.8709 18.3333 10.5774 18.3333 10.3333V8.6C18.3333 6.87057 17.836 5.21692 16.7518 3.98079C15.651 2.72578 14.0305 2 12 2Z" fill=" #373C70" /> <path fillRule="evenodd" clipRule="evenodd" d="M9.44303 19.1694C9.90172 18.8618 10.5229 18.9843 10.8305 19.443C10.9299 19.5912 11.0843 19.731 11.2919 19.8345C11.4998 19.938 11.7444 19.9964 12 19.9964C12.2556 19.9964 12.5002 19.938 12.7081 19.8345C12.9157 19.731 13.0701 19.5912 13.1695 19.443C13.4771 18.9843 14.0983 18.8618 14.557 19.1694C15.0157 19.4771 15.1381 20.0983 14.8305 20.557C14.5234 21.0149 14.0944 21.3783 13.6 21.6246C13.1058 21.8708 12.5546 21.9964 12 21.9964C11.4454 21.9964 10.8942 21.8708 10.4 21.6246C9.90564 21.3783 9.47658 21.0149 9.16946 20.557C8.86186 20.0983 8.98434 19.4771 9.44303 19.1694Z" fill=" #373C70" /> </g></svg>
                    </p>
                </ChipLayout>
                <ChipLayout>
                    <p className='chip-content'>
                        Create
                    </p>
                </ChipLayout>
                <ChipLayout>
                    <p className='chip-content'>
                        Collect
                    </p>
                </ChipLayout>
            </div>
            <div className="card"  onClick={() => setmobileNavActive(prev => !prev)}>
                <div className="img" />
                <div className="textBox">
                    <div className="textContent">
                        <p className="h1">Sandeep Kumar</p>
                    </div>
                    <p className="p">sandeepkumar@gmail.com</p>
                </div>
                <div className='arrow'>
                    <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                </div>
            </div>
        </div>
    )
}

export default Header
