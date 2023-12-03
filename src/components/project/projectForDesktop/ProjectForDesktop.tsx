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

      <div className="h-auto flex flex-col pr-[6rem] pl-[6rem] default">

        <div className="mb-[6rem]">
          <div className="borderB">
            <span className="text-[4rem]">
              Description
            </span>
          </div>
          <p className="text-[2.2rem] pt-[1rem]">
            {filteredProject?.description}
          </p>
        </div>

        <div className="flex flex-col items-center w-[100%]">
          <ImgCarousel filteredProject={filteredProject}>
            {filteredProject?.images.map(img => (
              <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
            ))}
          </ImgCarousel>
        </div>

        <Tools tools={filteredProject?.tools || []} />

        <div>
          <div className="borderB">
            <span className="text-[4rem]">Links</span>
          </div>
          <div className="flex gap-[2rem]">
            {filteredProject?.links?.map(link => (
              <div className="mt-[2rem] mb-[4rem]">
                <a href={link.url} title='Click to follow the link' target='_blank'>
                  <img 
                  src={link.img} 
                  alt={link.name} 
                  className='rounded-3xl mb-[0.5rem] cursor-pointer hover w-[360px] h-[202px]' />
                  <span className="text-[2.4rem]">{link.name}</span>
                </a>
              </div>
            )
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default ProjectForDesktop