import { ReactNode, useState } from "react"
import arrowR from '../../assets/arrowR.png'
import arrowL from '../../assets/arrowL.png'
import cls from './ImgCarousel.module.css'
import { IProject } from "../../components/project/projects.data"
import TextCarousel from "../textCarousel/TextCarousel"

interface ImgCarouselProps {
  children: ReactNode,
  filteredProject: IProject | null,
  isTablet?: boolean
  isMobile?: boolean
}

const ImgCarousel = ({ children, filteredProject, isTablet, isMobile }: ImgCarouselProps) => {
  const [offset, setOffset] = useState(0)
  const [textOffset, setTextOffset] = useState(0)
  const PAGE_WIDTH = isMobile ? 42.7 : (isTablet ? 60.3 : 90)
  const oneImgStep = isMobile ? 34.3 : (isTablet ? 52 : 81.5)
  const oneTextStep = isMobile ? 47.4 : 53

  const next = (pageWidth: number) => {
    //img carousel
    setOffset((currentOffset) => {
      const newOffset = currentOffset - oneImgStep
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - 17.1)
      return Math.max(newOffset, maxOffset)
    })

    //text carousel
    setTextOffset((currentOffset) => {
      const newOffset = currentOffset - oneTextStep
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - isMobile ? 94 : (isTablet ? 15 : 77))
      return Math.max(newOffset, maxOffset)
    })
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
  }

  return (
    <div className={cls.carousel}>
      <div className={cls.imgCarouselShell}>
        <div className={cls.carouselContainer}>
          <button onClick={prev}>
            <img
              src={arrowL}
              alt="<-"
              className={`contoursReverse hover ${cls.arrow}`}
              title='<- Preview'
            />
          </button>
          <div className={`bordeR rounded-2xl ${cls.window}`}>
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
              title='Next ->'
            />
          </button>
        </div>
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

      <TextCarousel offset={textOffset}>
        {filteredProject?.images.map(img => (
          <div key={img.id} className={cls.textCarouselComponent}>
            <span className="font-bold text-[2.6rem]">{img.title}</span>
            <p>
              {img.currentDescription}
            </p>
          </div>
        ))}
      </TextCarousel>
    </div>
  )
}

export default ImgCarousel