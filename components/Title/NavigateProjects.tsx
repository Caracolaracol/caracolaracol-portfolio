'use client'
import { locationAtom } from '@/app/Store'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import prev from '@/public/images/previo.png'
import next from '@/public/images/proximo.png'

function NavigateProjects({idPreviousProject, idNextProject}:any) {
    const [atEnd, setAtEnd] = useState(false)
    const [atStart, setAtStart] = useState(true)
    const [location, setLocation] = useAtom(locationAtom)
    
    useEffect(() => {
        setLocation('/portfolio')
        idNextProject == null ? setAtEnd(true) : setAtEnd(false)
        idPreviousProject == null ? setAtStart(true) : setAtStart(false)
    },[idPreviousProject, idNextProject, location,setLocation])

    return (
        <div className='flex justify-end items-center grow gap-2 tablet:pb-0 '>
            <div className="w-12 min-w-12 tablet:w-16 tablet:min-w-16 min-h-10 rounded-full">
                {atStart ? null : <Link href={`${location}/${idPreviousProject ? idPreviousProject : null}`}>
                    <button className={`font-tommyregular tablet:text-xl flex flex-col items-center filtromorado`}>
                        <div className='p-1 circleround bg-violet  dark:bg-violet '>
                            <Image src={prev} alt='anterior proyecto' width={20} height={30} className={`p-[0.1rem] tablet:w-[25px] tablet:h-[25px] dark:active:brightness-50  `} />
                        </div>
                        <p className='text-[0.65rem] tablet:text-[0.7rem] tracking-wider'>previous</p>
                    </button>
                </Link>
                }
            </div>

            <div className="w-12 min-w-12 tablet:w-16 tablet:min-w-16 min-h-10 rounded-full">
                {atEnd ? null : <Link href={`${location}/${idNextProject}`} >
                    <button className='font-tommyregular tablet:text-xl flex flex-col items-center filtromorado'>
                        <div className='p-1 circleround bg-violet  dark:bg-violet '>
                            <Image src={next} alt='siguiente' width={20} height={30} className={`p-[0.1rem] tablet:w-[25px] tablet:h-[25px] dark:active:brightness-50 `} />
                        </div>
                        <p className='text-[0.65rem] tablet:text-[0.7rem] tracking-wider'>next</p>
                    </button>
                </Link>}
            </div>
        </div>
  )
}

export default NavigateProjects