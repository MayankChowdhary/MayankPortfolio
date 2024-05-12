// @flow strict
import React,  { useState, useEffect  } from 'react';
import Link from 'next/link';

function PdfCard({ certificate }) {
  const [isMobile, setIsMobile] = useState(0)

  useEffect(() => {
    window.addEventListener('resize',  setIsMobile(window.innerWidth <= 1080));
    return () => {
        window.removeEventListener('resize',  setIsMobile(window.innerWidth <= 1080));
    }
}, []);

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className={(isMobile? 'h-[32vh] w-[45vh]' : 'h-[40vh] w-[55vh]') + " cursor-pointer overflow-hidden rounded-t-lg"}>
        
      <embed className='h-full w-full group-hover:scale-110 transition-all duration-300' src= {certificate.file} allow="autoplay"></embed>
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{certificate.institution}</p>
        
        </div>
        <Link target='_blank' href={certificate.file}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {certificate.title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PdfCard;