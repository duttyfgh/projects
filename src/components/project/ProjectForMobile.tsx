import { RefObject } from "react"
import { Link } from "react-router-dom"
import back from '../../assets/back.png'
import cls from './ProjectForMobile.module.css'
import { IProject } from "./projects.data"
import ImageSlider from "./Sliders/ImageSlider"
import TextSlider from "./Sliders/TextSlider"

interface ProjectForMobileProps {
    filteredProject: IProject | null,
    next: () => void,
    prev: () => void,
    sliderContainerRef: RefObject<HTMLDivElement>,
    sliderTextRef: RefObject<HTMLDivElement>,
    isMobile: boolean,
    
}

const ProjectForMobile = ({ filteredProject, next, prev, sliderContainerRef, sliderTextRef,  isMobile }: ProjectForMobileProps) => {
    return (
        <div className={` default ${cls.projectForMobile}`}>
            <Link to="/projects/" className='w-[100%]'>
                <img
                    src={back}
                    alt="<- back"
                    className={`contoursReverse hover ${cls.back}`}
                    title='<- Back'
                />
            </Link>

            <ImageSlider
                filteredProject={filteredProject}
                next={next}
                prev={prev}
                sliderContainerRef={sliderContainerRef}
                isMobile={isMobile}
            />

            {/* <TextSlider filteredProject={filteredProject} sliderTextRef={sliderTextRef} /> */}

        </div>
    )
}

export default ProjectForMobile