import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../context/Theme"
import ProjectForDesktop from "./ProjectForDesktop"
import ProjectForMobile from "./ProjectForMobile"
import projects, { IProject } from "./projects.data"

const Project = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1026)
  const [id, setId] = useState<string | null>('')
  const { handleCurrentProjectChange } = useContext(ThemeContext)

  const updateWindowWidth = () => {
    const newWidth = window.innerWidth
    setIsTablet(newWidth < 1026)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    //get id in the url 
    const queryParams = new URLSearchParams(window.location.search)
    const paramValue = queryParams.get('project')
    setId(paramValue)

    return () => {
      window.removeEventListener('resize', updateWindowWidth)

      //clear current project in state
      handleCurrentProjectChange('')
    }
  }, [])

  //filter
  const filterProjectsById = (projects: IProject[]): IProject | null => {
    const filteredProjects = projects.filter((project) => project.id === id)
    return filteredProjects.length > 0 ? filteredProjects[0] : null
  }
  const filteredProject = filterProjectsById(projects)

  //set current project
  filteredProject?.name && handleCurrentProjectChange(filteredProject?.name)

  return (

    isTablet
      ? <ProjectForMobile
        filteredProject={filteredProject}
      />

      : <ProjectForDesktop
        filteredProject={filteredProject}
      />

  )
}

export default Project
