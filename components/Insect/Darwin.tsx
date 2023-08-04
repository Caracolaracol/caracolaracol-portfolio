'use client'
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import ciervovolante from 'public/images/ciervovolante.png'
import { useDrag } from "@/hooks/useDrag";

function Darwin() {

    const draggableRef = useRef(null);
  const { position, handleMouseDown }:any = useDrag({
    ref: draggableRef
  });

  return (
    <div
    ref={draggableRef}
    className="left-[75%] top-[24%] desktop:left-[70%] desktop:top-[22%]"
      style={{
        position: 'fixed',
        zIndex:9,
        top: position.y,
        left: position.x
        
      }}
      onMouseDown={handleMouseDown}
      

    >
      <Image draggable
              src={ciervovolante}
              alt="un ciervo volante macho"
            className="max-w-[8rem] tablet:max-w-[11rem] laptop:max-w-[13rem] desktop:max-w-[16rem] opacity-70"
            />
    </div>
  );
}
//, (mousePosition.y + offset[1]) + 'px'
export default Darwin;