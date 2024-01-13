import React from 'react'
import ChipLayout from '../../Layouts/ChipLayout/ChipLayout'
import Search from '../Ui/Search'

const Header = () => {
    return (
        <div className='header-main'>
            <Search />
            <ChipLayout>
                <p className='chip-content'>
                    <svg width={40} height={40} viewBox="0 -11 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width={0} height={0} rx="5.5" stroke="#D9D9D9" /> <circle cx="34.87" cy="23.87" r="15.87" fill="#6481E7" /> <path fillRule="evenodd" clipRule="evenodd" d="M27.9365 24.5157L35.0552 28.724V12.7036L27.9365 24.5157Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.0557 12.7036V28.724L42.1744 24.5157L35.0557 12.7036Z" fill="#C1CCF5" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.0557 21.2802L27.9365 24.5155L35.0552 28.7238L42.1744 24.516L35.0557 21.2802Z" fill="#8299EC" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.0557 21.2802L27.9365 24.5155L35.0552 28.7238L35.0557 21.2802Z" fill="#C1CCF5" /> <path fillRule="evenodd" clipRule="evenodd" d="M27.9365 25.8658L35.0552 35.8978V30.0718L27.9365 25.8658Z" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.0557 30.0718V35.8982L42.1791 25.8658L35.0557 30.0718Z" fill="#C1CCF5" /> </g></svg>
                    3,25 ETH
                </p>
            </ChipLayout>
            <ChipLayout>
                <p className='chip-content'>
                    <svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.9695 2 8.34903 2.72578 7.24822 3.98079C6.16397 5.21692 5.66667 6.87057 5.66667 8.6V10.3333C5.66667 10.5774 5.55716 10.8709 5.27166 11.2498C4.99798 11.6129 4.6427 11.9534 4.25022 12.3296L4.18372 12.3934C3.49997 13.0494 3 13.9996 3 15.1333C3 16.67 4.19824 18 5.77778 18H18.2222C19.8018 18 21 16.67 21 15.1333C21 13.9996 20.5 13.0494 19.8163 12.3934L19.7498 12.3296L19.7497 12.3296C19.3573 11.9534 19.002 11.6129 18.7283 11.2498C18.4428 10.8709 18.3333 10.5774 18.3333 10.3333V8.6C18.3333 6.87057 17.836 5.21692 16.7518 3.98079C15.651 2.72578 14.0305 2 12 2Z" fill=" #373C70" /> <path fillRule="evenodd" clipRule="evenodd" d="M9.44303 19.1694C9.90172 18.8618 10.5229 18.9843 10.8305 19.443C10.9299 19.5912 11.0843 19.731 11.2919 19.8345C11.4998 19.938 11.7444 19.9964 12 19.9964C12.2556 19.9964 12.5002 19.938 12.7081 19.8345C12.9157 19.731 13.0701 19.5912 13.1695 19.443C13.4771 18.9843 14.0983 18.8618 14.557 19.1694C15.0157 19.4771 15.1381 20.0983 14.8305 20.557C14.5234 21.0149 14.0944 21.3783 13.6 21.6246C13.1058 21.8708 12.5546 21.9964 12 21.9964C11.4454 21.9964 10.8942 21.8708 10.4 21.6246C9.90564 21.3783 9.47658 21.0149 9.16946 20.557C8.86186 20.0983 8.98434 19.4771 9.44303 19.1694Z" fill=" #373C70" /> </g></svg>
                </p>
            </ChipLayout>
        </div>
    )
}

export default Header
