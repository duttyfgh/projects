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
        <div className={cls.main}>
            <div className={cls.container}>
                <div className="borderB w-[100%] mb-[1rem]">
                    <h1 className="text-[4rem]">Tools</h1>
                </div>
                <div className={cls.toolsContainer}>
                    {
                        tools.map(tool => (
                            <div key={tool.name}
                                className={`bordeR hover transitioon ${cls.tools}`}>
                                <img src={tool.img} alt={tool.name} className='w-[5rem] mt-[-2rem]' />
                                <span className={`ml-[1rem] text-[3rem] ${cls.tool}`}>{tool.name}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Tools