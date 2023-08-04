import React from 'react'
import TextTitle from './TextTitle'
import ProjectsButton from './ProjectsButton'
import NavigateProjects from './NavigateProjects'

interface Props {
  name: string,
  nameES?: string,
  idPreviousProject: string | boolean | null,
  idNextProject: string | boolean | null
}

function Title({ name, nameES, idPreviousProject, idNextProject }: Props) {


  return (
    <div className="flex justify-between items-center border-b-[1px] border-spacing-2 border-timberwolf dark:border-b-timberwolf !border-opacity-30 pb-3 mb-6 h-[3rem] tablet:h-[3.6rem] laptop:h-[3.8rem] desktop:h-[4rem]">
      <ProjectsButton />
      <TextTitle name={name} nameES={nameES} />
      <NavigateProjects idPreviousProject={idPreviousProject} idNextProject={idNextProject}/>
    </div>
  )
}

export default Title