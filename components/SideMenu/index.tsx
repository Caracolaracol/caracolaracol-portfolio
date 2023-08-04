'use client'
import { useEffect, useRef } from "react"

import { useAtom, useAtomValue } from "jotai"
import { hideSideMenuAnimationAtom, isShowingSideMenuAtom, languageAtom, showSideMenuAtom } from "@/app/Store"
import logoCaracol from '@/public/caracolaracol.png'
import MenuList from "./MenuList"
import Link from "next/link"
import Image from "next/image"

function SideMenu() {
    const wrapperRef = useRef<any>(null)
    const ulRef = useRef<any>(null)
    const [showSideMenu, setShowSideMenu] = useAtom(showSideMenuAtom)
    const [isShowingSideMenu, setIsShowingSideMenu] = useAtom(isShowingSideMenuAtom)
    const [hideSideMenuAnimation, setHideSideMenuAnimation] = useAtom(hideSideMenuAnimationAtom)
    const language = useAtomValue(languageAtom)

    const handlerSide = () => {
      if (isShowingSideMenu == false){
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

    // SHOW AND HIDE SIDE MENU HANDLER
  useEffect(() => {
    const sideMenuHandler = () => {
      if (isShowingSideMenu == true) {
        setHideSideMenuAnimation(true)
        setTimeout(() => {
          setShowSideMenu(false)
          setIsShowingSideMenu(false)
          setHideSideMenuAnimation(false)
        }, 452);
      }
    }
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        sideMenuHandler()
      }
      if (ulRef.current && ulRef.current.contains(event.target)) {
        sideMenuHandler()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [wrapperRef, isShowingSideMenu,setHideSideMenuAnimation, setIsShowingSideMenu,setShowSideMenu]);
  //


  return (
    <aside
      ref={wrapperRef}
      className={`${showSideMenu ? "!block showsidemenu" : ""} ${hideSideMenuAnimation ? "hidesidemenu" : ""
        } hidden laptop:showsidemenu  overflow-y-scroll hide_scrollbar laptop:block  w-[20rem] h-full max-h-[100vh] laptop:w-[26vw] desktop:w-[21rem] fixed top-0 left-0 z-30 dark:bg-richblack/70 bg-black text-snow`}>
      <div className='mx-3 border-b-[1px] border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 z-[99] flex'>
        <Link href='/'>
          <Image src={logoCaracol} className='w-20 tablet:w-[5.5rem] drop-shadow-md transition-opacity-1 z-[99]' alt='caracol' priority />
        </Link>
      </div>

      <div className="pl-[1.2rem] pt-3 laptop:pt-[2.5rem] mb-4 rounded-tr-sm rounded-br-sm overflow-y-scroll hide_scrollbar">
        <div onClick={handlerSide} className="laptop:hidden absolute top-2 flex flex-col items-center pl-[15rem] group">
          <div className='flex justify-center filtromorado w-8 h-8 tablet:w-8 tablet:h-8 items-center transition-colors cursor-pointer rounded-full -translate-x-[1px]'>
            <p className='font-tommybold font-black text-lg tablet:text-lg svg group-hover:text-cerise'>{` } `}</p>
          </div>
          <div className="cursor-pointer min-w-[59px]">
            <p className='font-tommyregular text-[0.6rem] tablet:text-[0.6rem] opacity-80 antialiased text-center text-snow dark:text-cerise transition-colors tracking-wider '>{language == 'EN' ? 'Close' : 'cerrar'}</p>
          </div>
        </div>

        <div ref={ulRef} className="flex group">
          <MenuList />
          <p className="hidden self-end text-cerise opacity-90 group-hover:animate-bounce">▼</p>
        </div>
      </div>
    </aside>
  )
}


export default SideMenu