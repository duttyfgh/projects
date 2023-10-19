import { Link } from "react-router-dom"
import projects, { IProject } from "./main/projects.data";
import back from '../assets/back.png'
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/Theme";

const Project = () => {
  const [id, setId] = useState<string | null>('')
  const { handleCurrentProjectChange } = useContext(ThemeContext);

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
    const filteredProjects = projects.filter((project) => project.id === id);
    return filteredProjects.length > 0 ? filteredProjects[0] : null;
  }
  const filteredProject = filterProjectsById(projects);

  //set current project
  filteredProject?.name && handleCurrentProjectChange(filteredProject?.name)

  return (
    <div className="h-[83.1vh] flex flex-col justify-between">
      <div className='flex items-center'>
        <Link to="/">
          <img
            src={back}
            alt="<- back"
            className='w-[6rem] ml-[6rem] contoursReverse cursor-pointer'
            title='Back'
          />
        </Link>
      </div>

      <div className="h-[80vh]">

        {filteredProject?.name}

      </div>

    </div>
  )
}

export default Project