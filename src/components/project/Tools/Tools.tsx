import { Link } from "react-router-dom"
import back from '../../../assets/back.png'
import cls from './Tools.module.css'

interface ITools {
    tools: {
        name: string
        img: string
    }[]
}

const Tools = ({ tools }: ITools) => {
    return (
        <div className="flex flex-col justify-start h-[83vh]">
            <Link to="/projects/">
                <img
                    src={back}
                    alt="<- back"
                    className='w-[6rem] contoursReverse cursor-pointer hover mt-[4rem] mb-[8rem]'
                    title='<- Back'
                />
            </Link>

            <div className="flex flex-col items-center">
                <h1 className="text-[4rem]">Tools</h1>
                {
                    tools.map(tool => (
                        <div key={tool.name}
                            className={`
                         flex
                         flex-col
                         items-center
                         text-[3rem]
                         m-[1.5rem]
                         bordeR
                         rounded-3xl
                         w-[15rem]
                         py-[1rem]
                         hover
                         transitioon
                         ${cls.tools}
                         `}>
                            <img src={tool.img} alt={tool.name} className='w-[5rem] mt-[-2rem]' />
                            <span className={`ml-[1rem] text-[3rem] ${cls.tool}`}>{tool.name}</span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Tools