import Tools from "./Tools/Tools"
import { IProject } from "./projects.data"
import ImgCarousel from '../../carousel/imgCarousel/ImgCarousel'
import { Link } from "react-router-dom"
import back from '../../assets/back.png'
import Links from "./Links/Links"
import { useTranslation } from "react-i18next"
import Description from "./Description/Description"
import { useState } from "react"
import cls from './Project.module.css'

interface ProjectForDesktopProps {
  filteredProject: IProject | null,
  imageCounterPluser: () => void
  imageCounterMinuser: () => void
  currentImageCounter: number
  isTablet: boolean
  isMobile: boolean
}

const ProjectForDesktop = ({
  filteredProject,
  imageCounterMinuser,
  imageCounterPluser,
  currentImageCounter,
  isTablet,
  isMobile
}: ProjectForDesktopProps) => {
  const [isZoom, setIsZoom] = useState<boolean>(false)
  
  const { t } = useTranslation()

  const openZoom = () => {
    setIsZoom(true)
  }

  const closeZoom = () => {
    setIsZoom(false)
  }

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
  }

  return (
    <>
      <div className={cls.backWrapper}>
        <Link to="/projects/">
          <img
            src={back}
            alt="<- back"
            className={`contoursReverse hover ${cls.back}`}
          />
        </Link>
      </div>

      {isZoom &&
        <div
          className="fixed z-30 top-0 bg-[#000000aa] w-[100%] h-[100%] flex justify-center items-center select-none cursor-zoom-out"
          onClick={closeZoom}>
          <img
            src={filteredProject?.images[currentImageCounter].url}
            className='w-[140rem] top-0 z-50 cursor-default md:p-[1.5rem]'
            onClick={handleImageClick} />
        </div>
      }

      <div className={`${cls.project} default`}>
        <Description title={t('project.desc')} description={t(`project.${filteredProject?.name}.description`)} />

        <div className="flex flex-col items-center w-[100%]">
          <ImgCarousel
            filteredProject={filteredProject}
            imageCounterPluser={imageCounterPluser}
            imageCounterMinuser={imageCounterMinuser}
            isTablet={isTablet}
            isMobile={isMobile}>
            {filteredProject?.images.map(img => (
              <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl cursor-zoom-in`} onClick={openZoom} />
            ))}
          </ImgCarousel>
        </div>

        <Tools tools={filteredProject?.tools || []} />

        {filteredProject?.links && <Links links={filteredProject?.links} />}

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

      </div>
    </>
  )
}

export default ProjectForDesktop