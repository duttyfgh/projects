import projects, { IProject } from "./projects.data"
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../context/Theme"
import arrowR from '../../assets/arrowR.png'
import arrowL from '../../assets/arrowL.png'
import Tools from "./Tools"

//  PLEASE REFACTOR ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const Project = () => {
  const [id, setId] = useState<string | null>('')
  const { handleCurrentProjectChange } = useContext(ThemeContext)
  const sliderContainerRef = useRef(null)
  const sliderTextRef = useRef(null)

  //get id in the url
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const paramValue = queryParams.get('project')
    setId(paramValue)

    //clear current project
    return () => {
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

  const imgInterest = 49.4
  const textInterest = 23.5

  const next = () => {

    //@ts-ignore
    sliderContainerRef.current.scrollLeft += (window.innerWidth * imgInterest) / 100

    //@ts-ignore
    sliderTextRef.current.scrollLeft += (window.innerWidth * textInterest) / 100
  }
  const prev = () => {
    //@ts-ignore
    sliderContainerRef.current.scrollLeft -= (window.innerWidth * imgInterest) / 100
    //@ts-ignore
    sliderTextRef.current.scrollLeft -= (window.innerWidth * textInterest) / 100
  }

  return (
    <div className="h-[85vh] flex justify-between items-center pr-[6rem] pl-[6rem] default">

      <Tools tools={filteredProject?.tools || []} />

      <div className="flex ">
        <div>
          <div className="flex">
            <button onClick={prev}>
              <img src={arrowL} alt="<" className="contoursReverse w-[2rem] hover mr-[2rem]" title='<- Preview' />
            </button>

            <div className="relative">
              <div className="absolute w-[90rem] h-[100%] z-100 "></div>
              <div
                className="flex w-[90rem] overflow-x-scroll gap-[5rem] test scroll-smooth bordeR rounded-3xl"
                ref={sliderContainerRef}>
                {filteredProject?.images.map(img => (
                  <img key={img.id} src={img.url} alt={img.title} className="rounded-2xl" />
                ))}
              </div>
            </div>

            <button onClick={next}>
              <img src={arrowR} alt=">" className="contoursReverse w-[2rem] hover ml-[2rem]" title='Next ->' />
            </button>
          </div>

          <div className="w-[100%] flex justify-center gap-[20rem] mt-[4rem]">
            <a
              className="reverse p-[1.5rem] px-[2.2rem] text-[2.5rem] rounded-2xl hover"
              href={filteredProject?.url}
              title='Click to visit the site'
            >
              Visit the site
            </a>

            <a
              className="bordeR p-[1.5rem] px-[2.2rem] text-[2.5rem] rounded-2xl hover"
              href={filteredProject?.githubUrl}
              title='Click to view code this site'
            >
              See the code
            </a>
          </div>

        </div>
      </div>

      <div className="relative">
        <div className="absolute w-[40rem] h-[100%] z-100"></div>

        <div
          className="w-[40rem] mb-[8rem] flex gap-[5rem] overflow-x-scroll scroll-smooth test "
          ref={sliderTextRef}>
          {filteredProject?.images.map(img => (
            <div key={img.id} className="max-w-[44rem] min-w-[40rem] text-[2.5rem] px-[2rem]">
              <span className="font-bold text-[2.6rem]">{img.title}</span>
              <p>
                {img.currentDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Project