import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useState } from 'react'

const SearchSlider = () => {

  useEffect(() => {
    const sliderContainer = document.querySelector("[data-slider-container-2]");
    const sliderPrevBtn = document.querySelector("[data-slider-prev-2]");
    const sliderNextBtn = document.querySelector("[data-slider-next-2]");
    const currentSlider = document.querySelector("[data-slider-2]");

    const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));

    const totalSliderItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    let currentSlidePos = 0;

    /**
     * NEXT SLIDE
     */
    const slideNext = function () {

      currentSlidePos++;

      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

      if (currentSlidePos >= totalSliderItems) sliderNextBtn.setAttribute("disabled", "");
      sliderPrevBtn.removeAttribute("disabled");

    }

    sliderNextBtn.addEventListener("click", slideNext);

    /**
     * PREVIOUS SLIDE
     */
    const slidePrev = function () {

      currentSlidePos--;

      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

      if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");
      sliderNextBtn.removeAttribute("disabled");

    }

    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = totalSliderItems <= 0;
    if (dontHaveExtraItem) sliderNextBtn.setAttribute("disabled", "");

    sliderPrevBtn.setAttribute("disabled", "");
  }, [])

  useLayoutEffect(() => {
    const context = gsap.context(() => {

      gsap.set(".slider-item .img-cover", {
        width: 0,
      });
      gsap.set(".head-card p", {
        x: -20,
        opacity: 0,
      });
      gsap.to(".slider-item .img-cover", {
        width: "100%",
        duration: 0.2,
        delay: 3,
        ease: 'sine.out',
      });
      gsap.to(".head-card p", {
        opacity: 1,
        x: 0,
        duration: 0.3,
        delay: 3.3,
        ease: 'sine.out',
      });
    })
    return () => context.revert();
  }, [])

  const sliderdata = [
    {
      title: "Ready Players",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382089/Rectangle_39376_ig2sot.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382320/Rectangle_1400_t3pnxs.png",
      profileName: "@dicar",
      charges: "$232,102",
      groundName: "Stretch Of Time",
      coin: "0.045 ETH"
    },
    {
      title: "Dragon’s Den",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382179/Rectangle_39376_1_rvwopd.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382309/Rectangle_39380_onz5de.png",
      profileName: "@astroo2",
      charges: "$172,023",
      groundName: "Arcade Land",
      coin: "0.045 ETH"
    },
    {
      title: "Crippled World",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382089/Rectangle_39376_2_xqjiw8.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382309/Rectangle_39379_jliuaw.png",
      profileName: "@micle",
      charges: "$92,002",
      groundName: "Shinsekai Portal",
      coin: "0.045 ETH"
    },
    {
      title: "Crippled World",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382089/Rectangle_39376_3_zytmea.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382308/Rectangle_39378_isbct9.png",
      profileName: "@11erorD.",
      charges: "$88,024",
      groundName: "Paper Cut",
      coin: "0.045 ETH"
    },
    {
      title: "Dragon’s Den",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382179/Rectangle_39376_1_rvwopd.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382309/Rectangle_39380_onz5de.png",
      profileName: "@astroo2",
      charges: "$172,023",
      groundName: "Arcade Land",
      coin: "0.045 ETH"
    },
    {
      title: "Ready Players",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382089/Rectangle_39376_ig2sot.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382320/Rectangle_1400_t3pnxs.png",
      profileName: "@dicar",
      charges: "$232,102",
      groundName: "Stretch Of Time",
      coin: "0.045 ETH"
    },
    {
      title: "Crippled World",
      mainImgsrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382089/Rectangle_39376_3_zytmea.png",
      profileSrc: "https://res.cloudinary.com/dylnk52kz/image/upload/v1705382308/Rectangle_39378_isbct9.png",
      profileName: "@11erorD.",
      charges: "$88,024",
      groundName: "Paper Cut",
      coin: "0.045 ETH"
    },

  ]

  return (
    <div className="slider card-slider" data-slider-2 >
      <div className="slider-container" data-slider-container-2>
        {
          sliderdata.map((card, index) => (
            <div className="slider-item" key={index}>
              <div className="head-card">
                <p>{card?.title}</p>
                <svg height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
              </div>
              <div className="img-holder">
                <img src={card?.mainImgsrc} alt="" className="img-cover" />
              </div>
              <div className="info-card">
                <div className="profile">
                  <img src={card?.profileSrc} alt="" />
                  <div className="profile-info">
                    <p>
                      {card?.profileName}
                      <svg height={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z" fill="#26C3FF" /> </g></svg>
                    </p>
                    <h3>{card?.charges}</h3>
                  </div>
                </div>
                <div className="game-info">
                  <p>{card?.groundName}</p>
                  <h3>{card?.coin}</h3>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <button className="btn-icon slider-control prev" data-slider-prev-2>
        <svg height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </button>

      <button className="btn-icon slider-control next" data-slider-next-2>
        <svg height={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </button>

    </div>
  )
}

export default SearchSlider
