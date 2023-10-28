import { ReactNode } from 'react'
import cls from './TextCarousel.module.css'

interface ImgCarouselProps {
    children: ReactNode,
    offset: number
}

const TextCarousel = ({ children, offset }: ImgCarouselProps) => {
    return (
        <div className={cls.carousel}>
            <div className={cls.carouselContainer}>
                <div className={`${cls.window}`}>
                    <div className={` ${cls.allItems}`} style={{
                        transform: `translateX(${offset}rem)`,
                    }}>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TextCarousel