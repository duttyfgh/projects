import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../context/Theme"
import ProjectForDesktop from "./ProjectForDesktop"
import ProjectForMobile from "./ProjectForMobile"
import projects, { IProject } from "./projects.data"

const Project = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767)
  const [isTablet, setItablet] = useState(window.innerWidth < 1026)
  const [id, setId] = useState<string | null>('')
  const { handleCurrentProjectChange } = useContext(ThemeContext)
  const sliderContainerRef = useRef(null)
  const sliderTextRef = useRef(null)

  const updateWindowWidth = () => {
    const newWidth = window.innerWidth
    setWindowWidth(newWidth)
    setItablet(newWidth < 1026)
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

  //constants for sliders
  const imgInterest = 49.5//  T - 83.1, D - 49.5, M - 
  const textInterest = 23.5
  const windowW = window.innerWidth

  //functions for sliders
  const next = () => {
    //@ts-ignore
    sliderContainerRef.current.scrollLeft += (windowW * imgInterest) / 100
    //@ts-ignore
    sliderTextRef.current.scrollLeft += (windowW * textInterest) / 100
  }

  const prev = () => {
    //@ts-ignore
    sliderContainerRef.current.scrollLeft -= (windowW * imgInterest) / 100
    //@ts-ignore
    sliderTextRef.current.scrollLeft -= (windowW * textInterest) / 100
  }
  return (

    isTablet
      ? <ProjectForMobile
        filteredProject={filteredProject}
        next={next}
        prev={prev}
        sliderContainerRef={sliderContainerRef}
        sliderTextRef={sliderTextRef}
        isMobile={isMobile}
         />

      : <ProjectForDesktop
        filteredProject={filteredProject}
        next={next}
        prev={prev}
        sliderContainerRef={sliderContainerRef}
        sliderTextRef={sliderTextRef}
        isMobile={isMobile}
      />

  )
}

export default Project
