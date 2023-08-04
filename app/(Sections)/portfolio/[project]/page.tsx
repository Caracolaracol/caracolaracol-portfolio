import { getProjects, pageControl } from '@/app/api/projects'

import Title from '@/components/Title'
import Websites from '@/components/Projects/Websites'
import Code from '@/components/Projects/Code'
import Apps from '@/components/Projects/Apps'
import Videos from '@/components/Projects/Videos'
import Music from '@/components/Projects/Music'
import Art from '@/components/Projects/Art'
import MacroPhotography from '@/components/Projects/MacroPhotography'

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
                        (data.projectType == 'fictional websites' || data.projectType == 'real websites') && <Websites projectData={data.projectData} />
                    }  
                    {
                        data.projectType == 'coding projects' && <Code projectData={data.projectData} />
                    }  
                    {
                        data.projectType == 'apps' && <Apps projectData={data.projectData} />
                    }
                    {
                        data.projectType == 'Videos' && <Videos projectData={data.projectData} />
                    }
                    {
                        data.projectType == 'Projectos musicales' && <Music projectData={data.projectData} />
                    }
                    {
                        data.projectType == 'Artes Visuales' && <Art projectData={data.projectData} />
                    }
                    {
                        data.projectType == 'Fotografia Macro' && <MacroPhotography projectData={data.projectData} />
                    }
                </div>
                <div className=" mt-4 mb-4 desktop:mt-6 desktop:mb-6 flex mx-auto">
                </div>
            </section>
        </>
  )
}