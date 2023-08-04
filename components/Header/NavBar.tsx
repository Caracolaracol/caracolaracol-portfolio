'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { languageAtom } from "@/app/Store"
import { useAtomValue } from "jotai"

import { NAV_NAMES } from "@/config/nav"
import { useRef } from "react"


function NavBar() {
    const pathname = usePathname()
    const language = useAtomValue(languageAtom)
    const refLinks = useRef<HTMLDivElement | any>(null)

    const handlerMouseLinks = (event:any) => { // BG ANIMATED OF FOOTER LINKS 
        const { left, top, width, height }:any = event.target.getBoundingClientRect()
        refLinks.current.style.opacity = "1"
        refLinks.current.style.visibility = "visible"
        refLinks.current?.style.setProperty("--left", `${left}px`)
        refLinks.current?.style.setProperty("--top", `${top + 30}px`)
        refLinks.current?.style.setProperty("--width", `${width}px`)
        refLinks.current?.style.setProperty("--height", `${height - 20}px`)
    }

    const handlerLeaveLinks = () => { // Leave mouse of the footer links
        refLinks.current.style.opacity = "0"
        refLinks.current.style.visibility = "hidden"

    }

    const styles = 'tablet:text-xs laptop:text-lg desktop:text-xl self-center text-center font-tommyregular hover:text-ocrelight dark:hover:text-ocrelight'
    
    return (
        <nav className='laptop:max-w-[18rem] laptop:min-w-[15rem] flex items-center z-50'>
            <ul className='flex flex-row justify-evenly'>
                {
                    NAV_NAMES.map(s => {
                        const isActive = pathname.startsWith(s.direccion);
                        
                        return (

                            <li key={s.name} className='laptop:max-w-[8rem] laptop:min-w-[4.8rem] text-center transition-opacity-1'>
                                <Link
                                    onMouseEnter={handlerMouseLinks}
                                    onMouseLeave={handlerLeaveLinks} 
                                    href={s.direccion}
                                    className={`${styles} ${isActive ? '!text-ocre dark:!text-ocre' : ''} `
                                    }
                                >
                                    {language == 'EN' ? s.name : s.nameES}
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
            <div
                ref={refLinks}
                className={` absolute bg-cerise/20 rounded-md
                            left-[var(--left)] top-[var(--top)]
                            w-[var(--width)] h-[var(--height)]
                            transition-all duration-300
                            ease-in-out
                            opacity-0
                            invisible
                            z-[9]
                            `}>

            </div>
        </nav>
    )
}

export default NavBar