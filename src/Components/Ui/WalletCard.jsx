import React from 'react'

const WalletCard = () => {
    return (
        <div className="wallet-card ">
            <div className="walletbox-1">
                <div className="blnc">
                    <p>Your Balance</p>
                </div>
                <div className="blnc-numbers">
                    <p>
                        ETH
                        <span>21.533.10</span>
                    </p>
                </div>
                <div className="coin-dropdown">
                    <div className='drop-name'>
                        <svg height={25} viewBox="0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: "  .st0{fill:#E3F2FD;} .st1{fill:#80D8FF;} .st2{fill:#1AD2A4;} .st3{fill:#ECEFF1;} .st4{fill:#55FB9B;} .st5{fill:#BBDEFB;} .st6{fill:#C1AEE1;} .st7{fill:#FF5252;} .st8{fill:#FF8A80;} .st9{fill:#FFB74D;} .st10{fill:#FFF176;} .st11{fill:#FFFFFF;} .st12{fill:#65C7EA;} .st13{fill:#CFD8DC;} .st14{fill:#37474F;} .st15{fill:#78909C;} .st16{fill:#42A5F5;} .st17{fill:#455A64;}  " }} /> <g id="Ethereum_x2C__crypto_x2C__cryptocurrency"> <g id="XMLID_40_"> <g id="XMLID_3638_"> <polygon className="st3" id="XMLID_45_" points="16,1.5 7.3,16 16,30.5 24.7,16 " /> </g> <g id="XMLID_73_"> <polygon className="st13" id="XMLID_50_" points="16,20.3 7.3,16 16,30.5 24.7,16 " /> </g> </g> <g id="XMLID_1535_"> <g id="XMLID_1557_"> <path className="st17" d="M16,31c-0.09,0-0.18-0.02-0.26-0.07c-0.24-0.14-0.31-0.45-0.17-0.69L24.12,16L16,2.47 L7.73,16.26c-0.14,0.24-0.45,0.31-0.69,0.17c-0.24-0.14-0.31-0.45-0.17-0.69l8.7-14.5c0.18-0.3,0.68-0.3,0.86,0l8.7,14.5 c0.09,0.16,0.09,0.36,0,0.51l-8.7,14.5C16.33,30.91,16.17,31,16,31z" id="XMLID_737_" /> </g> <g id="XMLID_1539_"> <path className="st17" d="M16,31c-0.17,0-0.33-0.09-0.43-0.24l-8.7-14.5c-0.14-0.24-0.07-0.54,0.17-0.69 c0.23-0.14,0.54-0.07,0.69,0.17l8.7,14.5c0.14,0.24,0.07,0.54-0.17,0.69C16.18,30.98,16.09,31,16,31z" id="XMLID_736_" /> </g> <g id="XMLID_3278_"> <path className="st17" d="M24.7,16.5c-0.08,0-0.15-0.02-0.22-0.05l-6.66-3.33c-0.25-0.12-0.35-0.42-0.22-0.67 c0.12-0.25,0.42-0.35,0.67-0.22l6.66,3.33c0.25,0.12,0.35,0.42,0.22,0.67C25.06,16.4,24.88,16.5,24.7,16.5z" id="XMLID_735_" /> </g> <g id="XMLID_266_"> <path className="st17" d="M7.3,16.5c-0.18,0-0.36-0.1-0.45-0.28c-0.12-0.25-0.02-0.55,0.22-0.67l6.65-3.33 c0.25-0.12,0.55-0.02,0.67,0.22c0.12,0.25,0.02,0.55-0.22,0.67l-6.65,3.33C7.45,16.48,7.38,16.5,7.3,16.5z" id="XMLID_734_" /> </g> <g id="XMLID_1538_"> <path className="st17" d="M16,31c-0.18,0-0.34-0.09-0.43-0.24l-8.7-14.5c-0.11-0.19-0.09-0.43,0.06-0.6 c0.15-0.16,0.39-0.21,0.59-0.11L16,19.79l8.48-4.24c0.2-0.1,0.44-0.06,0.59,0.11c0.15,0.16,0.18,0.41,0.06,0.6l-8.7,14.5 C16.34,30.91,16.18,31,16,31z M8.61,17.22L16,29.53l7.39-12.31l-7.16,3.58c-0.14,0.07-0.31,0.07-0.45,0L8.61,17.22z" id="XMLID_731_" /> </g> <g id="XMLID_1537_"> <path className="st17" d="M16,20.35c-0.28,0-0.5-0.22-0.5-0.5V5.5C15.5,5.22,15.72,5,16,5s0.5,0.22,0.5,0.5v14.35 C16.5,20.12,16.28,20.35,16,20.35z" id="XMLID_730_" /> </g> <g id="XMLID_1536_"> <path className="st17" d="M16,31c-0.18,0-0.34-0.09-0.43-0.24l-8.7-14.5c-0.09-0.16-0.09-0.36,0-0.51l8.7-14.5 c0.18-0.3,0.68-0.3,0.86,0l8.7,14.5c0.09,0.16,0.09,0.36,0,0.51l-8.7,14.5C16.34,30.91,16.18,31,16,31z M7.88,16L16,29.53 L24.12,16L16,2.47L7.88,16z" id="XMLID_727_" /> </g> </g> </g> </g></svg>
                        <span>Ethereum <span>ETH</span></span>
                    </div>
                    <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#E2E4E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                </div>
            </div>
            <div className="walletbox-2">
                <div className="earinings">
                    <div className="earn-head">
                        <div>
                            <svg height={20} fill="#60FFBC" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 612" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M545.325,500.685H66.675c-30.737,0-55.657,24.92-55.657,55.657c0,30.737,24.92,55.657,55.657,55.657h478.65 c30.737,0,55.657-24.92,55.657-55.657C600.982,525.604,576.062,500.685,545.325,500.685z" /> <path d="M129.753,464.922c30.737,0,55.657-24.92,55.657-55.657v-212.61c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v212.61C74.095,440.002,99.016,464.922,129.753,464.922z" /> <path d="M306.002,464.922c30.737,0,55.657-24.92,55.657-55.657V126.157c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v283.108C250.345,440.002,275.263,464.922,306.002,464.922z" /> <path d="M482.245,464.922c30.737,0,55.655-24.92,55.655-55.657V55.657C537.903,24.92,512.984,0,482.245,0 c-30.737,0-55.657,24.92-55.657,55.657v353.607C426.588,440.002,451.508,464.922,482.245,464.922z" /> </g> </g> </g></svg>
                        </div>
                        <span>Earnings</span>
                    </div>
                    <span className='spend'>7.048<span>ETH</span></span>
                    <div className="graph">
                        <svg width={130} viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#60FFBC" stroke="#60FFBC"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke:#60FFBC;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}" }} /></defs><title /><circle className="cls-2" cx={4} cy={27} r={3} /><circle className="cls-2" cx={25} cy={18} r={3} /><circle className="cls-2" cx={44} cy={31} r={3} /><line className="cls-2" x1={7} x2={22} y1="24.5" y2="17.5" /><line className="cls-2" x1={28} x2={41} y1="18.5" y2="28.5" /></g></svg>
                    </div>
                </div>
                <div className="spendings">
                    <div className="earn-head">
                        <div>
                            <svg height={20} fill="#FF5959" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 612" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M545.325,500.685H66.675c-30.737,0-55.657,24.92-55.657,55.657c0,30.737,24.92,55.657,55.657,55.657h478.65 c30.737,0,55.657-24.92,55.657-55.657C600.982,525.604,576.062,500.685,545.325,500.685z" /> <path d="M129.753,464.922c30.737,0,55.657-24.92,55.657-55.657v-212.61c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v212.61C74.095,440.002,99.016,464.922,129.753,464.922z" /> <path d="M306.002,464.922c30.737,0,55.657-24.92,55.657-55.657V126.157c0-30.737-24.92-55.657-55.657-55.657 s-55.657,24.92-55.657,55.657v283.108C250.345,440.002,275.263,464.922,306.002,464.922z" /> <path d="M482.245,464.922c30.737,0,55.655-24.92,55.655-55.657V55.657C537.903,24.92,512.984,0,482.245,0 c-30.737,0-55.657,24.92-55.657,55.657v353.607C426.588,440.002,451.508,464.922,482.245,464.922z" /> </g> </g> </g></svg>
                        </div>
                        <span>Spendings</span>
                    </div>
                    <span className='spend'>2.013<span>ETH</span></span>
                    <div className="graph">
                        <svg width={130} viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#FF5959" stroke="#FF5959"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke:#FF5959;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}" }} /></defs><title /><circle className="cls-2" cx={4} cy={27} r={3} /><circle className="cls-2" cx={25} cy={18} r={3} /><circle className="cls-2" cx={44} cy={31} r={3} /><line className="cls-2" x1={7} x2={22} y1="24.5" y2="17.5" /><line className="cls-2" x1={28} x2={41} y1="18.5" y2="28.5" /></g></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletCard
