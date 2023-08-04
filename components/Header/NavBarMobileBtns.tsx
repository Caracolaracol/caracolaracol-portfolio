import Image from 'next/image'
import React from 'react'

function NavBarMobileBtns({themeHandler,maripn, theme, marip, languageHandler, cast, language, actia}:any) {
    return (
        <div className='flex flex-row justify-center'>
            <div onClick={themeHandler} className='flex w-full flex-col cursor-pointer items-center justify-center'>

                <Image src={maripn} alt='luciernaga' className={`w-12 h-auto ${theme === 'dark' ? 'hidden' : ''} cursor-pointer`} />
                <Image src={marip} alt='abeja' className={`w-12 h-auto ${theme === 'light' ? 'hidden' : ''} cursor-pointer`} />
                <div>
                    <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{theme === 'dark' ? 'light mode' : 'dark mode'}</p>
                </div>
            </div>
            <div onClick={languageHandler} className='flex w-full flex-col items-center cursor-pointer justify-center'>
                <Image src={cast} alt='castnia moth' className={`w-10 grow h-auto ${language == 'ES' ? 'hidden' : ''} cursor-pointer`} />
                <Image src={actia} alt='actias luna' className={`w-10 grow h-auto ${language == 'EN' ? 'hidden' : ''} cursor-pointer`} />
                <div>
                    <p className='font-tommyregular text-snow text-xs antialiased text-center tracking-wider'>{language == 'ES' ? 'english' : 'español'}</p>
                </div>
            </div>
        </div>
    )
}

export default NavBarMobileBtns