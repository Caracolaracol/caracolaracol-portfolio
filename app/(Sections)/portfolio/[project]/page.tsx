import { getProjects, pageControl } from '@/app/api/projects'

import Title from '@/components/Title'
import Websites from '@/components/Projects/Websites'
import Code from '@/components/Projects/Code'
import Apps from '@/components/Projects/Apps'
import Videos from '@/components/Projects/Videos'
import Music from '@/components/Projects/Music'
import Art from '@/components/Projects/Art'
import MacroPhotography from '@/components/Projects/MacroPhotography'
import { APPS, ARTS, CODING, FICTIONAL_WEBSITES, MACRO, MUSIC, REAL_WEBSITES, VIDEOS } from '@/config/proyectTypes'
import fs from 'node:fs/promises'
import {compile} from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
interface Props {
    params: {
        project: string
    }
}


export default async function Page({ params }: Props) {
    const data = await getProjects(params)
    const { idPreviousProject, idNextProject } = await pageControl(data.previousProject, data.nextProject, data.lastArrayIndex, data.indexOfProject)

    return (
        <>
            <section className='w-[100%]'>
                <div>
                    <div key='blank-space' className="absolute top-0 left-0 h-2 w-2">
                    </div>
                    <Title name={data.projectData.name} nameES={data.projectData.nameES} idPreviousProject={idPreviousProject} idNextProject={idNextProject}/>
                    {
                        (data.projectType == FICTIONAL_WEBSITES || data.projectType == REAL_WEBSITES) && <Websites projectData={data.projectData} />
                    }  
                    {
                        data.projectType == CODING && <Code projectData={data.projectData} />
                    }  
                    {
                        data.projectType == APPS && <Apps projectData={data.projectData} />
                    }
                    {
                        data.projectType == VIDEOS && <Videos projectData={data.projectData} />
                    }
                    {
                        data.projectType == MUSIC && <Music projectData={data.projectData} />
                    }
                    {
                        data.projectType == ARTS && <Art projectData={data.projectData} />
                    }
                    {
                        data.projectType == MACRO && <MacroPhotography projectData={data.projectData} />
                    }
                </div>
                <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 flex mx-auto">
                </div>
            </section>
        </>
  )
}