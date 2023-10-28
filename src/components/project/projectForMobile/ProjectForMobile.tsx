import { Link } from "react-router-dom"
import back from '../../../assets/back.png'
import ImgCarousel from "../../../carousel/imgCarousel/ImgCarousel"
import { IProject } from "../projects.data"
import Tools from "../Tools/Tools"
import cls from './ProjectForMobile.module.css'

interface ProjectForMobileProps {
    filteredProject: IProject | null,
    isMobile: boolean
}

const ProjectForMobile = ({ filteredProject, isMobile }: ProjectForMobileProps) => {
    return (
        <div className={`default ${cls.projectForMobile}`}>
            <Link to="/projects/" className='w-[100%]'>
                <img
                    src={back}
                    alt="<- back"
                    className={`contoursReverse hover ${cls.back}`}
                    title='<- Back'
                />
            </Link>

            <ImgCarousel filteredProject={filteredProject} isTablet={true} isMobile={isMobile}>
                {filteredProject?.images.map(img => (
                    <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
                ))}
            </ImgCarousel>

            <div className="max-w-[55rem] p-[2rem]">
                <div className="borderB  mb-[1rem]">
                    <span className="text-[3rem] w-[55rem]">
                        Description
                    </span>
                </div>
                <p>
                    {filteredProject?.description}
                </p>
            </div>

            <Tools tools={filteredProject?.tools || []} />

            <div className={cls.buttons}>
                <a
                    className={`reverse ${cls.button} hover`}
                    href={filteredProject?.url}
                    title='Click to visit the site'>
                    Visit the site
                </a>

                <a
                    className={`border ${cls.button} hover`}
                    href={filteredProject?.githubUrl}
                    title='Click to view code this site'>
                    See the code
                </a>
            </div>

        </div>
    )
}

export default ProjectForMobile