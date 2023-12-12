import Tools from "../Tools/Tools"
import { IProject } from "../projects.data"
import ImgCarousel from '../../../carousel/imgCarousel/ImgCarousel'
import { Link } from "react-router-dom"
import back from '../../../assets/back.png'
import Links from "../Links/Links"
import { useTranslation } from "react-i18next"
import Description from "../Description/Description"
import { useState } from "react"

interface ProjectForDesktopProps {
  filteredProject: IProject | null,
  imageCounterPluser: () => void
  imageCounterMinuser: () => void
  currentImageCounter: number
}

const ProjectForDesktop = ({ filteredProject, imageCounterMinuser, imageCounterPluser, currentImageCounter }: ProjectForDesktopProps) => {
  const { t } = useTranslation()
  const [isZoom, setIsZoom] = useState<boolean>(false)

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
      <div className="w-[10rem] overflow-hidden">
        <Link to="/projects/">
          <img
            src={back}
            alt="<- back"
            className='contoursReverse hover w-[6rem] cursor-pointer m-[4rem]'
          />
        </Link>
      </div>

      {isZoom &&
        <div
          className="fixed z-30 top-0 bg-[#000000aa] w-[100%] h-[100%] flex justify-center items-center select-none cursor-zoom-out"
          onClick={closeZoom}>
          <img src={filteredProject?.images[currentImageCounter].url} className='w-[140rem] top-0 z-50 cursor-default' onClick={handleImageClick} />
        </div>
      }

      <div className="h-auto flex flex-col pr-[6rem] pl-[6rem] default">
        <Description title={t('project.desc')} description={t(`project.${filteredProject?.name}.description`)} />

        <div className="flex flex-col items-center w-[100%]">
          <ImgCarousel filteredProject={filteredProject} imageCounterPluser={imageCounterPluser} imageCounterMinuser={imageCounterMinuser}>
            {filteredProject?.images.map(img => (
              <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl cursor-zoom-in`} onClick={openZoom} />
            ))}
          </ImgCarousel>
        </div>

        <Tools tools={filteredProject?.tools || []} />

        {filteredProject?.links && <Links links={filteredProject?.links} />}

      </div>
    </>
  )
}

export default ProjectForDesktop