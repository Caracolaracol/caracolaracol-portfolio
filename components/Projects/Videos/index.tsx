'use client'
import { project } from '@/types/interfaces'
import TechAndLinks from "../TechAndLinks"
import Video from '../Video'
import Image from 'next/image'
import Opinion from '../Opinion'
import TextContent from '../TextContent'
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import React, { Fragment, useEffect, useState, createElement } from 'react'

interface VideoProjectProps {
    projectData: any,
    language: any,
    content:any,
    contentES:any
}

function Videos({projectData}:project) {
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
    <div className="border-[2px] border-spacing-2 border-timberwolf dark:border-timberwolf  border-opacity-40 dark:border-opacity-10 tablet:max-w-[96%] tablet:m-auto">
        <div>
            <div key={projectData.name} className='bg-snow dark:bg-richblack'>
                {projectData && <Video videolink={projectData.video} />}
            </div>
        </div>
    </div>
    <div className=' min-w-full h-6'>
    </div>
    <div className="flex flex-col   tablet:min-h-[21rem] laptop:min-h-[12rem] bg-blancod bg-opacity-40 dark:bg-negron dark:bg-opacity-90 rounded-tr-sm rounded-br-sm p-4 ">
        <div key={projectData.name} className="desktop:min-h-[9rem] transitionshort laptop:px-[5%] desktop:px-[2vw]">
            <div className="text-left">
                {projectData.illustrations ? <Image alt="ilustration" width='640' height='20' src={projectData.illustrations} className='w-40 tablet:w-[13rem] float-right ml-3  tablet:ml-4 svg mr-4 tablet:mr-5' /> : ''}
            </div>
            <TextContent content={content} contentES={contentES}/>
        </div>
        <Opinion projectData={projectData} />
        <div className="border-b-[1px] border-verde dark:border-blancod  border-opacity-40 dark:border-opacity-10  mt-4 mb-4 desktop:mt-6 desktop:mb-6 w-[80%] flex mx-auto">
        </div>
        <TechAndLinks isCoding={false} tech={projectData.technologies ? projectData.technologies : []} github={projectData.github} link={projectData.link} />
    </div>
</>
)
}

export default Videos