import projects from '@/db/projects.json'



export interface App {
    id:             string;
    name:           string;
    nameES:         string;
    projectType:    string;
    description:    string;
    descriptionES:  string;
    opinion:        string;
    opinionES:      string;
    images:         string[];
    imagesmobile:   string[];
    video?:         string;
    illustrations?: string;
    github:         string;
    link?:          string;
    technologies:   Technology[];
}

interface Technology {
    idtech:      string;
    name:        string;
    img:         string;
    description: string;
}

export interface Art {
    id:            string;
    name:          string;
    nameES:        string;
    projectType:   string;
    description:   string;
    descriptionES: string;
    opinion?:      string;
    opinionES?:    string;
    images?:       string[];
    video?:         string;
    imagesmobile?:   string[];
    illustrations?: string;
    github?:         string;
    link?:          string;
    technologies?:   Technology[];
}

export interface Video {
    id:            string;
    name:          string;
    nameES?:        string;
    projectType:   string;
    description:   string;
    descriptionES: string;
    opinion?:      string;
    opinionES?:    string;
    imagesmobile?:   string[];
    illustrations?: string;
    images:        string[];
    video:         string;
    github?:         string;
    link?:          string;
    technologies:  Technology[];
}
interface AllProjectsDataArray {
    websites:       App[];
    codingProjects: App[];
    apps:           App[];
    videos:         Video[];
    art:            Art[];
}
// GET PROJECTS NAME FOR ASIDE MENU
export async function getProjectsNamesArray() {
    const { websites, codingProjects, apps, videos, art }: AllProjectsDataArray = projects
    const allProjectsDataArray = [...websites, ...codingProjects, ...apps, ...videos, ...art]
    const namesArrayData: {id:string, name:string, projectType: string}[] = []
    allProjectsDataArray.forEach((element: any) => {
        let {id, name, projectType}= element
        let newObject = {id, name, projectType}
        namesArrayData.push(newObject)
    });
    return {namesArrayData}
}

// GET PROJECTS
export async function getProjects(params:{project:String}) {
    const {websites, codingProjects, apps, videos, art}: AllProjectsDataArray = projects
    const allProjectsDataArray: (App | Video | Art)[] = [...websites, ...codingProjects, ...apps, ...videos, ...art]
    const projectFound = allProjectsDataArray.find((el) => el.id === params.project)
    let indexOfProject, previousProject, nextProject, lastArrayIndex, projectType
    if (projectFound != undefined) {
        indexOfProject = allProjectsDataArray.indexOf(projectFound)
        previousProject = allProjectsDataArray[indexOfProject-1]
        nextProject = allProjectsDataArray[indexOfProject+1]
        lastArrayIndex = allProjectsDataArray.length - 1
        projectType = projectFound.projectType
    }
    const projectData: (App | Video | Art) = JSON.parse(JSON.stringify(projectFound))
    return  {allProjectsDataArray, projectData, projectFound, indexOfProject, previousProject, nextProject, lastArrayIndex, projectType} 
}


// GET ID OF NEXT AND PREVIOUS PROJECTS; FOR PAGINATION
export async function pageControl(previousProject:any, nextProject:any, lastArrayIndex:any, indexProject:any) {
    let idPreviousProject: boolean | null = null
      let idNextProject: boolean | null = null
      let isLastWebProject = false
  
      previousProject ? idPreviousProject = previousProject.id : idPreviousProject = null
      if (nextProject != undefined) {
          idNextProject = nextProject.id
      }
  
      // Is WebProject?
      let isWebProject = true
      if (indexProject > lastArrayIndex) {
          isWebProject = false
      }
      if (indexProject === lastArrayIndex) {
          isLastWebProject = true
      }
  
      return { idPreviousProject, idNextProject }
  }