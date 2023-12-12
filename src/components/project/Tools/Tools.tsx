import { useTranslation } from 'react-i18next'
import cls from './Tools.module.css'

interface ITools {
    tools: {
        name: string
        img: string
    }[]
}

const Tools = ({ tools }: ITools) => {

    const { t } = useTranslation()

    return (
        <div className={cls.main}>
            <div className="borderB w-[100%] mb-[1rem]">
                <h1 className="text-[4rem]">{t('project.tools')}</h1>
            </div>
            <div className={cls.toolsContainer}>
                {
                    tools.map(tool => (
                        <div key={tool.name} className='flex flex-col items-center'>
                            <div 
                                className={`bordeR transitioon ${cls.tools}`}
                                title={tool.name}>
                                <img src={tool.img} alt={tool.name} className='w-[5rem] mt-[-2rem]' />
                            </div>
                                <span>{tool.name}</span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Tools