import { RefObject } from "react"
import Tools from "./Tools/Tools"
import TextSlider from "./Sliders/TextSlider"
import ImageSlider from "./Sliders/ImageSlider"
import { IProject } from "./projects.data"
import ImgCarousel from '../../carousel/ImgCarousel'

//  PLEASE REFACTOR ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
interface ProjectForDesktopProps {
  filteredProject: IProject | null,
  next: () => void,
  prev: () => void,
  sliderContainerRef: RefObject<HTMLDivElement>,
  sliderTextRef: RefObject<HTMLDivElement>,
  isMobile: boolean
}

const ProjectForDesktop = ({ filteredProject, next, prev, sliderContainerRef, sliderTextRef, isMobile }: ProjectForDesktopProps) => {

  return (
    <div className="h-[85vh] flex justify-between items-center pr-[6rem] pl-[6rem] default">

      <Tools tools={filteredProject?.tools || []} />

      <div className="flex flex-col">

        {/* <ImageSlider
            filteredProject={filteredProject}
            next={next}
            prev={prev}
            sliderContainerRef={sliderContainerRef}
            isMobile={isMobile} /> */}
        <ImgCarousel filteredProject={filteredProject}>
          {filteredProject?.images.map(img => (
            <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
          ))}
        </ImgCarousel>

        <div className="w-[100%] flex justify-center gap-[20rem] mt-[4rem]">
          <a
            className="reverse p-[1.5rem] px-[2.2rem] text-[2.5rem] rounded-2xl hover"
            href={filteredProject?.url}
            title='Click to visit the site'>
            Visit the site
          </a>

          <a
            className="bordeR p-[1.5rem] px-[2.2rem] text-[2.5rem] rounded-2xl hover"
            href={filteredProject?.githubUrl}
            title='Click to view code this site'>
            See the code
          </a>
        </div>


      </div>

      {/* <TextSlider filteredProject={filteredProject} sliderTextRef={sliderTextRef} /> */}

    </div>
  )
}

export default ProjectForDesktop