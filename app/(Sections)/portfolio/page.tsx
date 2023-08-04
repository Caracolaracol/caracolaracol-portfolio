'use client'
import React, { useEffect } from 'react'

import Image from 'next/image'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, languageAtom, locationAtom, showSideMenuAtom } from '@/app/Store'

import flor from 'public/images/flor1.png'
import { usePathname } from 'next/navigation'
import Darwin from '@/components/Insect/Darwin'


export default function Page() {
  const language = useAtomValue(languageAtom)
  const pathname = usePathname()
  const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
  const setLocation = useSetAtom(locationAtom)
  const setShowSideMenu = useSetAtom(showSideMenuAtom)
  const setHideSideMenuAnimation = useSetAtom(hideSideMenuAnimationAtom)
  
  useEffect(() => {
    setLocation(pathname)
  }, [pathname, setLocation])

  const handlerSide = () => { 

    // SHOW AND HIDE SIDE MENU WHILE ON MOBILE
    if (isShowingSideMenu == false) {
      setShowSideMenu(true)
      setIsShowingSideMenu(true)
    } else {
      setHideSideMenuAnimation(true)
      setTimeout(() => {
        setShowSideMenu(false)
        setIsShowingSideMenu(false)
        setHideSideMenuAnimation(false)
      }, 452);
    }
  }

  return (
    <div className="transition-opacity-0">
      <div className="absolute flex justify-center items-center m-[5vw] top-0 right-0 bottom-0 left-0 laptop:hidden "> 
        <div className="flex items-center justify-center desktop:max-w-[50rem] pb-4 gap-[10vw]">
          <div className='flex items-center flex-col '>
            <div className='flex items-center flex-col mt-4'>
              <div onClick={handlerSide} className="flex justify-center cursos bg-violetad bg-violeta  dark:bg-violeta filtromorado w-11 h-11 tablet:w-14 tablet:h-14 items-center active:bg-violetaactive dark:active:bg-violetaactive transition-colors cursor-pointer rounded-full -translate-x-[1px]">
                <p className="text-naranjad text-naranja dark:text-naranja font-tommybold font-black text-[1.5rem] tablet:text-[2rem] svg group-hover:text-fucsia">{`{ }`}</p>
              </div>
              <div onClick={handlerSide} className="cursor-pointer min-w-[59px]">
                <p className="font-tommyregular text-[0.9rem] opacity-80 antialiased text-center tablet:text-dark dark:text-cerise transition-colors tracking-wider ">
                  {language == "EN" ? "projects" : "proyectos"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={flor}
              alt="una flor enredadera"
              className="max-w-[8rem] tablet:max-w-[11rem] laptop:max-w-[13rem] desktop:max-w-[16rem] opacity-70"
            />
          </div>
        </div>
      </div>

      <div className="hidden laptop:flex items-center justify-center">

        <Darwin />
      </div>
    </div>

  )
}