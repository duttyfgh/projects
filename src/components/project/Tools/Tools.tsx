import { Variants, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import cls from './Tools.module.css'

interface ITools {
    tools: {
        name: string
        img: string
        id: number
    }[]
}

const appearingOfTools: Variants = {
    hidden: {
        opacity: 0
    },
    visible: custom => ({
        opacity: 1,
        transition: { duration: .7, delay: custom / 10 }
    })
}

const Tools = ({ tools }: ITools) => {

    const { t } = useTranslation()

    return (
        <div className={cls.main}>
            <div className="borderB w-[100%] mb-[1rem]">
                <h2 className="text-[4rem]">{t('project.tools')}</h2>
            </div>
            <div className={cls.toolsContainer}>
                {
                    tools.map(tool => (
                        <motion.div
                            key={tool.id}
                            className='flex flex-col items-center'
                            initial='hidden'
                            whileInView='visible'
                            variants={appearingOfTools}
                            viewport={{once: true}}
                            custom={tool.id}>
                            <div
                                className={`bordeR transitioon ${cls.tools}`}
                                title={tool.name}>
                                <img src={tool.img} alt={tool.name} className='w-[5rem] mt-[-2rem]' />
                            </div>
                            <span>{tool.name}</span>
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default Tools