import arrowR from '../../../assets/arrowR.png'
import arrowL from '../../../assets/arrowL.png'
import { RefObject } from 'react';
import { IProject } from '../projects.data';

interface ImageSliderProps {
    prev: () => void,
    next: () => void,
    sliderContainerRef: RefObject<HTMLDivElement>,
    filteredProject: IProject | null,
    isMobile: boolean,
    isTablet?: boolean
}

const ImageSlider = ({ prev, next, sliderContainerRef, filteredProject, isMobile, isTablet }: ImageSliderProps) => {

   const width = isMobile ? '40rem' : '90rem'

    return (
        <div className="flex">
            <button onClick={prev}>
                <img src={arrowL} alt="<" className="contoursReverse w-[10rem] hover" title='<- Preview' />
            </button>

            <div className="relative m-[2rem]">
                <div className={`absolute w-[${width}] h-[100%] z-100 `}></div>
                <div
                    className={`flex w-[${width}] overflow-x-scroll gap-[5rem] test scroll-smooth bordeR rounded-3xl`}
                    ref={sliderContainerRef}>
                    {filteredProject?.images.map(img => (
                        <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl w-[${width}]`} />
                    ))}
                </div>
            </div>

            <button onClick={next}>
                <img src={arrowR} alt=">" className="contoursReverse w-[10rem] hover " title='Next ->' />
            </button>
        </div>
    )
}

export default ImageSlider