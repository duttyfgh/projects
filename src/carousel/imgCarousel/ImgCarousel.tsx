import { ReactNode, useState } from "react"
import arrowR from '../../assets/arrowR.png'
import arrowL from '../../assets/arrowL.png'
import cls from './ImgCarousel.module.css'
import { IProject } from "../../components/project/projects.data"
import TextCarousel from "../textCarousel/TextCarousel"
import { useTranslation } from "react-i18next"

interface ImgCarouselProps {
  children: ReactNode,
  filteredProject: IProject | null,
  isTablet?: boolean
  isMobile?: boolean
  imageCounterPluser: () => void
  imageCounterMinuser: () => void
}

const ImgCarousel = ({ children,
  filteredProject,
  isTablet,
  isMobile,
  imageCounterPluser,
  imageCounterMinuser
}: ImgCarouselProps) => {
  const [offset, setOffset] = useState(0)
  const [textOffset, setTextOffset] = useState(0)
  const PAGE_WIDTH = isMobile ? 42.7 : (isTablet ? 60.4 : 90.2)
  const oneImgStep = isMobile ? 34.4 : (isTablet ? 51.7 : 81.5)
  const oneTextStep = isMobile ? 45 : (isTablet ? 57 : 45)//45 default, 57

  const next = (pageWidth: number) => {
    //img carousel
    setOffset((currentOffset) => {
      const newOffset = currentOffset - oneImgStep
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - 33.8)
      return Math.max(newOffset, maxOffset)
    })

    //text carousel
    setTextOffset((currentOffset) => {
      const newOffset = currentOffset - oneTextStep
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - (isMobile ? -9 :(isTablet ? 14 : 181)))
      return Math.max(newOffset, maxOffset)
    })

    imageCounterPluser()
  }

  const prev = () => {
    //img carousel
    setOffset((currentOffset) => {
      const newOffset = currentOffset + oneImgStep
      return Math.min(newOffset, 0)
    })

    //text carousel
    setTextOffset((currentOffset) => {
      const newOffset = currentOffset + oneTextStep
      return Math.min(newOffset, 0)
    })

    imageCounterMinuser()
  }

  const { t } = useTranslation()

  return (
    <div className={cls.carousel}>
      <div className={cls.imgCarouselShell}>
        <div className={cls.carouselContainer}>
          <button onClick={prev}>
            <img
              src={arrowL}
              alt="<-"
              className={`contoursReverse hover ${cls.arrow}`}
            />
          </button>
          <div className={`rounded-2xl ${cls.window}`}>
            <div className={`gap-[1rem] ${cls.allItems}`} style={{
              transform: `translateX(${offset}rem)`,
            }}>
              {children}
            </div>
          </div>
          <button onClick={() => next(PAGE_WIDTH)}>
            <img
              src={arrowR}
              alt="->"
              className={`contoursReverse hover ${cls.arrow}`}
            />
          </button>
        </div>
        <div className={cls.buttons}>
          <a
            className={`reverse ${cls.button} hover`}
            href={filteredProject?.url}
            target='_blank'
          >
            {t('project.buttons.visit')}
          </a>

          <a
            className={`border ${cls.button} hover`}
            href={filteredProject?.githubUrl}
            target='_blank'
          >
            {t('project.buttons.code')}
          </a>
        </div>
      </div>

      <TextCarousel offset={textOffset}>
        {filteredProject?.images.map(img => (
          <div key={img.id} className={cls.textCarouselComponent}>
            <span className="font-bold text-[2.6rem]">{img.title}</span>
            <p>
              {t(`project.${filteredProject?.name}.slider.${img.title}`)}
            </p>
          </div>
        ))}
      </TextCarousel>
    </div>
  )
}

export default ImgCarousel