// @flow strict
'use client'
import { certificates } from "@/utils/data/certificates";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import PdfCard from './pdf-card';
import ReactDOM from "react-dom";
import React, { Component } from "react";
import { useState, useEffect  } from 'react';
import ReactCardCarousel from "react-card-carousel";

function Blog() {

  const [isMobile, setIsMobile] = useState(0)

  useEffect(() => {
    window.addEventListener('resize',  setIsMobile(window.innerWidth <= 1080));
    return () => {
        window.removeEventListener('resize',  setIsMobile(window.innerWidth <= 1080));
    }
}, []);

  return (
    <div id='certifications' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

    <div className="flex justify-center -translate-y-[1px]">
      <div className="w-3/4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>

    <div className="flex justify-center my-5 lg:py-8">
      <div className="flex  items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Certifications
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>

     <div className={(isMobile? 'h-[76vh]' : 'h-[94vh]')}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500} alignment={"vertical"}>
          {
        certificates.map((certi, i) => (
            <PdfCard certificate={certi} key={i} />
          ))
        }
        </ReactCardCarousel>
        </div>
    </div>
  );
};

export default Blog;