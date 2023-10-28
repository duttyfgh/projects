import Tools from "../Tools/Tools"
import { IProject } from "../projects.data"
import ImgCarousel from '../../../carousel/imgCarousel/ImgCarousel'
import { Link } from "react-router-dom"
import back from '../../../assets/back.png'

interface ProjectForDesktopProps {
  filteredProject: IProject | null,
}

const ProjectForDesktop = ({ filteredProject }: ProjectForDesktopProps) => {
  return (
    <>
      <div className="w-[100%]">
        <Link to="/projects/" >
          <img
            src={back}
            alt="<- back"
            className='contoursReverse hover w-[6rem] cursor-pointer m-[4rem]'
            title='<- Back'
          />
        </Link>
      </div>

      <div className="h-[85vh] flex justify-between pr-[6rem] pl-[6rem] default">

        <Tools tools={filteredProject?.tools || []} />

        <div className="flex flex-col items-center w-[100%] ">
          <ImgCarousel filteredProject={filteredProject}>
            {filteredProject?.images.map(img => (
              <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
            ))}
          </ImgCarousel>

        </div>
      </div>
    </>
  )
}

export default ProjectForDesktop