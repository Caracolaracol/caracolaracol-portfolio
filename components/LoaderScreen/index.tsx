'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import caracol from '/public/images/logo2.jpg'


const LoaderScreen = () => {

  return (
    <>
     <div className={`z-[99] gradient_dia dark:gradient_noche absolute top-0 left-0 h-screen w-screen flex justify-center items-center `}>
      <div className={` w-12 flex flex-col justify-center items-center`}>
        <Image src={caracol.src} className='loader_icon w-12 h-12 mb-4 rounded-full' alt='loading logo' width='48' height='48' />
        <h1 className='font-chrono text-xl'>Loading...</h1>
      </div>
    </div> 
    </>
    
    );
  }
  
  export default LoaderScreen;