'use client'
import React, { Fragment, useEffect, useState, createElement } from 'react'
import Slider from '../Slider'
import TechAndLinks from '../TechAndLinks'
import Image from 'next/image'
import { useAtomValue } from 'jotai'
import { languageAtom } from '@/app/Store'
import { unified } from 'unified'
import rehypeReact from 'rehype-react'
import rehypeParse from 'rehype-parse'
import { project } from '@/types/interfaces'

function Code({projectData}:project) {
  const language = useAtomValue(languageAtom)
  const [content, setContent] = useState<any>(Fragment)
  const [contentES, setContentES] = useState<any>(Fragment)

  useEffect(() => {
    // UNIFIED FOR TEXT WITH HTML
    const descriptionArray = [projectData.description, projectData.descriptionES]
    descriptionArray.forEach(element => unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, { createElement, Fragment })
        .process(`${element.replace(/["]+/g, '')}`)
        .then((file) => {
            if (descriptionArray[0] == element) {
                setContent(file.result)
            } else {
                setContentES(file.result)
            }
        }))
}, [projectData])

  return (
    <>
            <div className="border-[2px] border-spacing-2 border-verde dark:border-blancod  border-opacity-40 dark:border-opacity-10 tablet:max-w-[96%] tablet:m-auto">
                <div className='relative pb-[125%] tablet:pb-[56.25%]'>
                    <div key={projectData.name} className='bg-blancod dark:bg-negron absolute top-0 left-0 w-full h-full '>
                        <Slider images={projectData.images} imagesm={projectData.imagesmobile} data={projectData.images} />
                    </div>
                </div>
            </div>
            <div className=' min-w-full h-6'>
            </div>
            <div className="flex flex-col   tablet:min-h-[21rem] laptop:min-h-[12rem] bg-blancod bg-opacity-40 dark:bg-negron dark:bg-opacity-90 rounded-tr-sm rounded-br-sm p-4 tablet:pb-8">
                <div key={projectData.name} className="desktop:min-h-[9rem] transitionshort laptop:px-[5%] desktop:px-[2vw] pb-4">
                    <div className="text-left">
                        {projectData.illustrations ? <Image alt="ilustration" width='640' height='640' src={`/images${projectData.illustrations}`} className='w-40 tablet:w-[18rem] float-right ml-3  tablet:ml-4 svg mr-4 tablet:mr-5' /> : ''}
                    </div>
                    <p className='text-[1.1rem] font-tommyregular tracking-wider antialiased text-justify' >{language == 'EN' ? content : contentES}</p>
                </div>
                <p className='text-[1rem] font-tommyregular font-bold tracking-wider antialiased laptop:px-[5%] desktop:px-[2vw]'>
                    {language == 'EN' ? projectData.opinion : projectData.opinionES}
                </p>
                <div className="border-b-[1px] border-verde dark:border-blancod  border-opacity-40 dark:border-opacity-10  mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">
                </div>
                <TechAndLinks isCoding={true} lang={language} tech={projectData.technologies ? projectData.technologies : []} github={projectData.github} link={projectData.link} />
            </div>
        </>
  )
}

export default Code