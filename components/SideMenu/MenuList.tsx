'use client'
import React, { useEffect, useState } from 'react'

import { useParams, usePathname } from 'next/navigation'

import Subtitle from './Subtitle'
import ProjectLink from './ProjectLink'
import { getProjectsNamesArray } from '@/app/api/projects'
import { LINKLIST } from '@/config/links'
import Link from 'next/link'

function MenuList() {
    const pathname = usePathname()
    const params = useParams()
    const [dataProjects, setDataProjects] = useState<any>([])
    const [blogEntries, setBlogEntries] = useState<any>([])
    const [isOutside, setIsOutside] = useState<boolean | null>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchProjectNames = async () => {
          const data = await getProjectsNamesArray()
          setDataProjects(data.namesArrayData)
        }

        fetchProjectNames()
        setIsLoading(false)
    },[setDataProjects, setIsOutside])
    if (isLoading){
    return <div></div>
    } else {
    return (
        <>
            {pathname.startsWith('/portfolio') && (
                <div>
                    <Subtitle>Websites</Subtitle>
                    <ul>
                        {dataProjects && dataProjects.filter((el: any) => el.projectType == "real websites").map((element: any) => (
                            <ProjectLink
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                projectname={params.project}
                                pathname={pathname}
                                outside={isOutside}
                                routeInitial={'/portfolio'} />
                        ))}
                    </ul>
                    <Subtitle>Fictional Websites</Subtitle>
                    <ul>
                        {dataProjects.filter((el: any) => el.projectType == "fictional websites").map((element: any) => (
                            <ProjectLink
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                projectname={params.project}
                                pathname={pathname}
                                outside={isOutside}
                                routeInitial={'/portfolio'}  />
                        ))}
                    </ul>
                    <Subtitle>Coding Projects</Subtitle>
                    <ul>
                        {dataProjects
                            .filter(
                                (element: any) => element.projectType == "coding projects"
                            )
                            .map((filtered: any) => (
                                <ProjectLink
                                    key={filtered.id}
                                    id={filtered.id}
                                    projectname={params.project}
                                    name={filtered.name}
                                    pathname={pathname}
                                    outside={isOutside}
                                    routeInitial={'/portfolio'} 
                                />
                            ))}
                    </ul>
                    <Subtitle>Apps</Subtitle>
                    <ul>
                        {dataProjects
                            .filter(
                                (element: any) => element.projectType == "apps"
                            )
                            .map((filtered: any) => (
                                <ProjectLink
                                    key={filtered.id}
                                    id={filtered.id}
                                    projectname={params.project}
                                    name={filtered.name}
                                    pathname={pathname}
                                    outside={isOutside}
                                    routeInitial={'/portfolio'} 
                                />
                            ))}
                    </ul>
                    <Subtitle>Videos</Subtitle>
                    <ul>
                        {dataProjects
                            .filter(
                                (element: any) => element.projectType == "Videos"
                            )
                            .map((filtered: any) => (
                                <ProjectLink
                                    key={filtered.id}
                                    id={filtered.id}
                                    projectname={params.project}
                                    name={filtered.name}
                                    pathname={pathname}
                                    outside={isOutside}
                                    routeInitial={'/portfolio'} 
                                />
                            ))}
                    </ul>
                    <Subtitle>Art</Subtitle>
                    <ul>
                        {dataProjects
                            .filter(
                                (element: any) => element.projectType == "Projectos musicales" ||
                                    element.projectType == "Artes Visuales" ||
                                    element.projectType == "Fotografia Macro"
                            )
                            .map((filtered: any) => (
                                <ProjectLink
                                    key={filtered.id}
                                    id={filtered.id}
                                    projectname={params.project}
                                    name={filtered.name}
                                    pathname={pathname}
                                    outside={isOutside}
                                    routeInitial={'/portfolio'} 
                                />
                            ))}
                    </ul>
                </div>
            )}

            {pathname.startsWith("/about") && (
                <div>
                    <Subtitle>Links</Subtitle>
                    <ul>
                        {LINKLIST.map((el) => {
                            return (
                                <li key={el.name}>
                                    <a
                                        className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased text-snow dark:text-dark laptop:dark:text-snow dark:hover:text-cerise hover:text-ocrelight"
                                        href={el.link}
                                        target="_blank"
                                    >
                                        {el.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

          {pathname.startsWith("/blog") && (
            <div>
              <Subtitle>Blog Entries</Subtitle>
              <ul>
                {blogEntries &&
                  blogEntries.map((element: any) => (
                    <Link
                      href={`/blog/${element.id}`}
                      key={element.id}
                    >
                      <li key={element.id} className="font-tommyregular indent-1 laptop:text-[15px] desktop:text-[17px] tracking-wide antialiased text-snow dark:text-dark laptop:dark:text-snow dark:hover:text-cerise hover:text-ocrelight">
                        -{" "}
                        {`${element.name} (${element.date[1]} ${element.date[0]})`}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          )} 
        </>
    )
}
}

export default MenuList