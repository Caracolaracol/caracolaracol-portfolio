'use client'
import { languageAtom } from '@/app/Store'
import { useAtomValue } from 'jotai'
import React from 'react'

function Opinion({projectData}:any) {
    const language = useAtomValue(languageAtom)

    return(
        <p className='text-[1rem] font-tommyregular font-bold tracking-wider antialiased laptop:px-[5%] desktop:px-[2vw]'>
            {language == 'EN' ? projectData.opinion : projectData.opinionES}
        </p>
  )
}

export default Opinion