import { Link } from "react-router-dom"
import back from '../../assets/back.png'
import ImgCarousel from "../../carousel/ImgCarousel"
import cls from './ProjectForMobile.module.css'
import { IProject } from "./projects.data"

interface ProjectForMobileProps {
    filteredProject: IProject | null,
}

const ProjectForMobile = ({ filteredProject }: ProjectForMobileProps) => {
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

            <ImgCarousel filteredProject={filteredProject}>
                {filteredProject?.images.map(img => (
                    <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
                ))}
            </ImgCarousel>

        </div>
    )
}

export default ProjectForMobile