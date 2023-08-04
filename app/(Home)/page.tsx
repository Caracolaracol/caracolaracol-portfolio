'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import ParticlesTS from '@/components/Particles'

import Image from 'next/image'
import myself1 from 'public/images/yo.jpg'
import myself2 from 'public/images/yo2.jpg'
import LoaderScreen from '@/components/LoaderScreen'

function Page() {
    const refLinks = useRef<HTMLDivElement | any>(null)
    const [done,setDone] = useState<any>(false);

    useEffect(() => {
        setTimeout(()=>{
            setDone(true)
        },500)
    },[done])
    
    const language = 'EN'
    const styles = 'font-chrono text-2xl tablet:text-3xl laptop:text-4xl p-2'

    const handlerMouseLinks = (event:any) => { // BG ANIMATED OF FOOTER LINKS 
        const { left, top, width, height }:any = event.target.getBoundingClientRect()
        refLinks.current.style.opacity = "1"
        refLinks.current.style.visibility = "visible"
        refLinks.current?.style.setProperty("--left", `${left}px`)
        refLinks.current?.style.setProperty("--top", `${top +35}px`)
        refLinks.current?.style.setProperty("--width", `${width}px`)
        refLinks.current?.style.setProperty("--height", `${height - 40}px`)
    }

    const handlerLeaveLinks = () => { // Leave mouse of the footer links
        refLinks.current.style.opacity = "0"
        refLinks.current.style.visibility = "hidden"
    }


    return (
        <>
            {
                (myself2 && done) ? <div className="flex transition_verylong flex-col justify-center self-center items-center mb-12">
                    <header className="flex w-64 h-[237px] justify-center mb-4">
                        <div className="relative w-full h-full rounded-full flex justify-center items-end">
                            <Image
                                alt="Myself with nature background"
                                src={myself2}
                                className="circle_img_1"
                            />
                            <Image
                                alt="Myself with other nature background "
                                className="circle_img_2"
                                src={myself1}
                            />
                        </div>
                    </header>
                    <main className="flex flex-col justify-evenly flex-nowrap text-center px-2  z-50">
                        <h1 className="overflow-hidden text-[2.4rem] font-tommy cursor-default tablet:tracking-wide tablet:text-5xl laptop:text-6xl desktop:text-7xl laptop:tracking-normal">
                            Caracolaracol{" "}
                            <span className="text-ocre font-tommy font-bold text-4xl tablet:text-4xl laptop:text-6xl desktop:text-7xl">{`//`}</span>{" "}
                            Creative Developer
                        </h1>
                        <p className="text-sm font-tommy tablet:text-lg desktop:text-xl tablet:pt-2 tablet:tracking-wider dark:text-lavenderblush">
                            <span className="text-cerise tablet:text-lg desktop:text-xl tablet:tracking-wide font-tommy">
                                #{" "}
                            </span>
                            {language == "EN"
                                ? `Hi there! I'm Agustín Rojas, I'm a web developer and artist. `
                                : `Hola! Soy Agustin Rojas, desarrollador web y artista.`}
                        </p>
                        <h2 className={`${styles} pt-2`}>
                            {language == "EN"
                                ? `Welcome to my site!`
                                : `Bienvenidx a mi sitio!`}
                        </h2>
                    </main>

                    <nav className="flex justify-center py-2 tablet:py-3 z-50" >
                        <Link href="/portfolio">
                            <button  className="flex items-center justify-center gap-2 font-tommy transition-colors bg-violet text-snow hover:text-cerise dark:bg-violet  dark:hover:text-cerise dark:text-blancon rounded-lg text-2xl h-10 w-fit px-6 py-6 tablet:py-0 tablet:h-14 tablet:px-4 desktop:px-7 desktop:py-8 tablet:text-4xl desktop:text-4xl tablet:tracking-wider min-w-[14.5rem]  tablet:min-w-[20rem] laptop:min-w-[22rem] group">
                                <p className="text-cerise group-hover:text-snow transition-colors">
                                    {"{"}
                                </p>
                                {language == "EN" ? ` My Portfolio ` : `Mi portafolio`}
                                <p className="text-cerise group-hover:text-snow transition-colors">
                                    {"}"}
                                </p>
                            </button>
                        </Link>
                    </nav>
                    <footer className="flex flex-col justify-between text-center dark:text-snow mb-8 z-50">
                        <ul className="flex gap-2 shrink" >
                            <li className='' onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks} >

                                <a
                                    className={styles}
                                    href="https://github.com/Caracolaracol"
                                    target="_blank"

                                >
                                    Github
                                </a>
                            </li>
                            <li onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks}>

                                <a
                                    className={styles}
                                    href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/"
                                    target="_blank"


                                >
                                    Linkedin
                                </a>
                            </li>
                            <li onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks}>

                                <a
                                    className={styles}
                                    href="https://www.instagram.com/caracol.___/"
                                    target="_blank"

                                >
                                    Instagram
                                </a>
                            </li>
                            <li onMouseEnter={handlerMouseLinks}
                                onMouseLeave={handlerLeaveLinks}>

                                <a
                                    className={styles}
                                    href="https://drive.google.com/file/d/1leg_c4dXK_TOjvJ2J35yD0Hf5FyeqX8f/view?usp=sharing"
                                    target="_blank"

                                >
                                    CV
                                </a>
                            </li>
                        </ul>
                        <div
                            ref={refLinks}
                            className={`
                                absolute bg-cerise/20 backdrop-blur-lg rounded-md
                                left-[var(--left)] top-[var(--top)]

                                w-[var(--width)] h-[var(--height)]
                                transition-all duration-300
                                ease-in-out
                                opacity-0
                                -z-10 
                            `}>

                        </div>
                        <div className={`flex justify-center gap-3`}> </div>
                    </footer>
                    <ParticlesTS />
                </div> : <LoaderScreen /> 
            }
        </>
    )
}

export default Page