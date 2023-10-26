import { ReactNode, useState } from "react"
import arrowR from '../assets/arrowR.png'
import arrowL from '../assets/arrowL.png'
import cls from './ImgCarousel.module.css'
import { IProject } from "../components/project/projects.data"
import TextCarousel from "./TextCarousel"

interface ImgCarouselProps {
  children: ReactNode,
  filteredProject: IProject | null,
}

const ImgCarousel = ({ children, filteredProject }: ImgCarouselProps) => {
  const [offset, setOffset] = useState(0)
  const [textOffset, setTextOffset] = useState(0)
  const PAGE_WIDTH = 90
  //one step - -81.5

  const next = (pageWidth: number) => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 81.5
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - 17.1)
      return Math.max(newOffset, maxOffset)
    })

    setTextOffset((currentOffset) => {
      const newOffset = currentOffset - 40
      //@ts-ignore
      const maxOffset = -(pageWidth * (children?.length - 1) - 100)
      return Math.max(newOffset, maxOffset)
    })
  }

  const prev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 81.5
      return Math.min(newOffset, 0)
    })

    setTextOffset((currentOffset) => {
      const newOffset = currentOffset + 40
      return Math.min(newOffset, 0)
    })
  }

  return (
    <div className={cls.carousel}>
      <div className={cls.carouselContainer}>
        <button onClick={prev}>
          <img
            src={arrowL}
            alt="<-"
            className="contoursReverse w-[3rem] hover cursor-pointer"
            title='<- Preview'
          />
        </button>
        <div className={` bordeR rounded-2xl ${cls.window}`}>
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
            className="contoursReverse w-[3rem] hover cursor-pointer"
            title='Next ->'
          />
        </button>
      </div>

      <TextCarousel offset={textOffset}>
        {filteredProject?.images.map(img => (
          <div key={img.id} className="max-w-[44rem] min-w-[40rem] text-[2.5rem] px-[2rem]">
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