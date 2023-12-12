import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/Theme"
import ProjectForDesktop from "./projectForDesktop/ProjectForDesktop"
import ProjectForMobile from "./projectForMobile/ProjectForMobile"
import projects, { IProject } from "./projects.data"

const Project = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1026)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767)

  const [id, setId] = useState<string | null>('')
  const { handleCurrentProjectChange } = useContext(ThemeContext)

  const [currentImageCounter, setCurrentImageCounter] = useState<number>(0)

  const updateWindowWidth = () => {
    const newWidth = window.innerWidth
    setIsTablet(newWidth < 1026)
    setIsMobile(newWidth < 767)
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

  const imageCounterPluser = () => {
    if (currentImageCounter <= 3) {
      setCurrentImageCounter(currentImageCounter + 1)
    }

  }

  const imageCounterMinuser = () => {
    if (currentImageCounter >= 1) {
      setCurrentImageCounter(currentImageCounter - 1)
    }
  }

  return (

    isTablet
      ? <ProjectForMobile
        filteredProject={filteredProject}
        isMobile={isMobile}
      />

      : <ProjectForDesktop
        filteredProject={filteredProject}
        imageCounterPluser={imageCounterPluser}
        imageCounterMinuser={imageCounterMinuser}
        currentImageCounter={currentImageCounter}
      />

  )
}

export default Project
