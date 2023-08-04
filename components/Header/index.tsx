import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import logoCaracol from '@/public/caracolaracol.png'
import NavBar from './NavBar';
import NavBarBtns from './NavBarBtns';
import NavBarMobile from './NavBarMobile';

function Header() {

  return (
      <div id='header' className='fixed z-10 w-[99vw] tablet:w-screen '>
          <header className='flex flex-row dark:bg-dark bg-snow justify-between  items-center border-b-[1px] border-timberwolf dark:border-timberwolf border-opacity-50 dark:border-opacity-70 mx-2 tablet:mr-6 tablet:ml-[2%] laptop:ml-[27vw] desktop:ml-[23rem]'>
              <div className='ml-2 laptop:ml-12 z-[99] laptop:invisible'>
                  <Link href='/'>
                      <Image src={logoCaracol} className='w-20 tablet:w-[5.5rem] drop-shadow-md transition-opacity-1 z-[99]' alt='caracol' priority />
                  </Link>
              </div>
              <div className="hidden tablet:mr-4 laptop:flex"> 
                   <NavBar /> 
                  <div className='items-center flex mx-4 max-h-[3rem] min-h-[3rem] border-l-[1px] border-opacity-50 dark:border-opacity-70 border-l-timberwolf dark:border-l-timberwolf self-center'></div>
                  <NavBarBtns /> 
              </div>
              <div className='laptop:hidden flex'>
                  <div key='menunav' className='laptop:hidden flex flex-row transition-opacity-1'>
                      <NavBarMobile /> 
                  </div>
              </div>
          </header>
      </div>
  )
}

export default Header