// @flow strict
"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React from "react";
import Slider from "react-slick";
import { slidesData } from "@/utils/data/slides-data";


function SlideCard() {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 700,
      settings: {
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,

      }
    }]
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
      <Slider {...settings}>
        {slideList}
      </Slider>
    </div>
  );
};

export default SlideCard;