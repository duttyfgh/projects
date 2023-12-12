import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import back from '../../../assets/back.png'
import ImgCarousel from "../../../carousel/imgCarousel/ImgCarousel"
import Description from "../Description/Description"
import Links from "../Links/Links"
import { IProject } from "../projects.data"
import Tools from "../Tools/Tools"
import cls from './ProjectForMobile.module.css'

interface ProjectForMobileProps {
    filteredProject: IProject | null,
    isMobile: boolean
}

const ProjectForMobile = ({ filteredProject, isMobile }: ProjectForMobileProps) => {

  const { t } = useTranslation()

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

            <Description title={t('project.desc')} description={t(`project.${filteredProject?.name}.description`)} />

            <ImgCarousel filteredProject={filteredProject} isTablet={true} isMobile={isMobile}>
                {filteredProject?.images.map(img => (
                    <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
                ))}
            </ImgCarousel>

            <Tools tools={filteredProject?.tools || []} />

            <div className={cls.buttons}>
                <a
                    className={`reverse ${cls.button} hover`}
                    href={filteredProject?.url}
                    title='Click to visit the site'
                    target='_blank'
                >
                    {t('project.buttons.visit')}
                </a>

                <a
                    className={`border ${cls.button} hover`}
                    href={filteredProject?.githubUrl}
                    title='Click to view code this site'
                    target='_blank'
                >
                    {t('project.buttons.code')}
                </a>
            </div>

            {
                filteredProject?.links && <Links links={filteredProject?.links} />
            }

        </div>
    )
}

export default ProjectForMobile