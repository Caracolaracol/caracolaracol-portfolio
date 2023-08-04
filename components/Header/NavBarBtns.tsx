'use client'
import React, { useEffect, useState } from 'react'

import * as Tooltip from '@radix-ui/react-tooltip';

import { useAtom } from 'jotai';
import { languageAtom } from '@/app/Store';

import actia from '@/public/images/actia.png'
import cast from '@/public/images/castn.png'
import maripn from '@/public/images/maripn.png'
import marip from '@/public/images/marip.png'
import Image from 'next/image';
import { useTheme } from 'next-themes';


function NavBarBtns() {
    const [mounted, setMounted] = useState(false)
    const [language, setLanguage] = useAtom(languageAtom)
    const { theme, setTheme } = useTheme()

    const themeHandler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const languageHandler = () => {
        language === 'EN' ? setLanguage('ES') : setLanguage('EN')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    
    return (
        <>

            <div className='flex flex-row justify-between gap-1 min-w-[8.2rem]'>
                <div onClick={themeHandler} className='flex w-[3.6rem] flex-col cursor-pointer items-center justify-center'>

                    <Image src={maripn} alt='luciernaga' className={`w-[2.7rem] h-auto ${theme === 'dark' ? 'hidden' : ''} cursor-pointer`} />
                    <Image src={marip} alt='abeja' className={`w-[2.7rem] h-auto ${theme === 'light' ? 'hidden' : ''} cursor-pointer`} />
                    <div>
                        <p className='font-tommyregular text-dark dark:text-snow text-[0.65rem] antialiased text-center tracking-wider'>{theme === 'dark' ? 'light mode' : 'dark mode'}</p>
                    </div>
                </div>
                <div onClick={languageHandler} className='flex w-[3.6rem] flex-col items-center cursor-pointer justify-center'>
                    <Image src={cast} alt='castnia moth' className={`w-[2.6rem] grow h-auto ${language == 'ES' ? 'hidden' : ''} cursor-pointer`} />
                    <Image src={actia} alt='actias luna' className={`w-[2.6rem] grow h-auto ${language == 'EN' ? 'hidden' : ''} cursor-pointer`} />
                    <div>
                        <p className='font-tommyregular text-dark dark:text-snow text-[0.65rem] antialiased text-center tracking-wider'>{language == 'ES' ? 'english' : 'español'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBarBtns