import { ReactNode, useState } from "react"
import arrowR from '../assets/arrowR.png'
import arrowL from '../assets/arrowL.png'
import cls from './Carousel.module.css'
import { IProject } from "../components/project/projects.data"

interface CarouselProps {
  children: ReactNode,
  filteredProject: IProject | null
}

const Carousel = ({ children, filteredProject }: CarouselProps) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const PAGE_WIDTH = 90
  //one step - -81.5

  const next = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 81.5
      //@ts-ignore
      const maxOffset = -(PAGE_WIDTH * (children?.length - 1) - 17.1)
      return Math.max(newOffset, maxOffset)
    })
  }

  const prev = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 81.5
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
        <button onClick={next}>
          <img
            src={arrowR}
            alt="->"
            className="contoursReverse w-[3rem] hover cursor-pointer"
            title='Next ->'
          />
        </button>
      </div>
    </div>
  )
}

export default Carousel