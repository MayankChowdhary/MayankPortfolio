// @flow strict
"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { slidesData } from "@/utils/data/slides-data";
import { ReactTyped } from "react-typed";

const namesDesktop = [
 'Yogifi Smart YogaMat','Yogifi Smart YogaMat','Yogifi Smart YogaMat', 'Advanced Media Player','Advanced Media Player','Advanced Media Player', 'Enguru Live English App','Enguru Live English App','Enguru Live English App', 'Ifield Indoor And Outdoor Positioning System','Ifield Indoor And Outdoor Positioning System','Ifield Indoor And Outdoor Positioning System', 'HRMS Flutter App','HRMS Flutter App','HRMS Flutter App','Mobile POS Android App','Mobile POS Android App','Mobile POS Android App'
]
function SlideCard() {
  const [newTitle, setnewTitle] = useState("Advanced Media Player");

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover:false,
    beforeChange: (prev, next) => {
      setnewTitle(namesDesktop[next]);
    },
    responsive: [
      {
        breakpoint: 1080,
        settings: {
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,

        }
    },
  ]
  };

  let slideList = [];

  slidesData.forEach((slideItem, index) => {
    slideList.push(
      <div key={index}>
        <div className="img-body">
          <img src={slideItem} alt={index} />
        </div>
      </div>

    );
  });


  return (
    <div className="slide-container">
       <ReactTyped className="ReactTyped"  
              strings={[newTitle]}
              typeSpeed={10}
              loop={false}
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
            <br/> <br/><br/>
      <Slider {...settings}>
        {slideList}
      </Slider>
    </div>
  );
};

export default SlideCard;