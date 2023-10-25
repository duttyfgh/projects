import { RefObject } from "react"
import { IProject } from "../projects.data"

interface TextSliderProps {
    sliderTextRef: RefObject<HTMLDivElement>,
    filteredProject: IProject | null
}

const TextSlider = ({ filteredProject, sliderTextRef }: TextSliderProps) => {
    return (
        <div className="relative">
            <div className="absolute w-[40rem] h-[100%] z-100"></div>

            <div
                className="w-[40rem] mb-[8rem] flex gap-[5rem] overflow-x-scroll scroll-smooth test "
                ref={sliderTextRef}>
                {filteredProject?.images.map(img => (
                    <div key={img.id} className="max-w-[44rem] min-w-[40rem] text-[2.5rem] px-[2rem]">
                        <span className="font-bold text-[2.6rem]">{img.title}</span>
                        <p>
                            {img.currentDescription}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TextSlider