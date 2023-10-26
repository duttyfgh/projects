import Tools from "./Tools/Tools"
import { IProject } from "./projects.data"
import ImgCarousel from '../../carousel/ImgCarousel'

interface ProjectForDesktopProps {
  filteredProject: IProject | null,
}

const ProjectForDesktop = ({ filteredProject }: ProjectForDesktopProps) => {
  return (
    <div className="h-[85vh] flex justify-between items-center pr-[6rem] pl-[6rem] default">

      <Tools tools={filteredProject?.tools || []} />

      <div className="flex flex-col justify-center items-center w-[100%]">
        <ImgCarousel filteredProject={filteredProject}>
          {filteredProject?.images.map(img => (
            <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
          ))}
        </ImgCarousel>

      </div>
    </div>
  )
}

export default ProjectForDesktop