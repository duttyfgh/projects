import projects, { IProject } from '../project/projects.data.js'
import { Link } from 'react-router-dom'
import cls from './Main.module.css'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import defaultFilter from '../../assets/defaultFilter.png'
import reverseFilter from '../../assets/reverseFilter.png'
import { useTranslation } from 'react-i18next'
import { Variants, motion } from 'framer-motion'

const appearingOfProjectCard: Variants = {
  hidden: {
    opacity: 0
  },
  visible: custom => ({
    opacity: 1,
    transition: { duration: .7, delay: custom/10 }
  })
}

const Main = () => {
  const [projectForMap, setProjectForMap] = useState<IProject[]>(projects.slice().reverse())
  const [isReverseFilter, setIsReverseFilter] = useState<boolean>(false)

  const reverseProjectsHandler = () => {
    setProjectForMap(projects)
    setIsReverseFilter(true)
  }

  const defaultProjectsHandler = () => {
    setProjectForMap(projects.slice().reverse())
    setIsReverseFilter(false)
  }

  const { t } = useTranslation()

  return (
    <motion.main
     className={`${cls.main} default`}
     initial={{width: '-100%'}}
     animate={{width: '100%'}}
     exit={{x: -window.innerWidth, transition: {duration: .2, ease: 'easeIn'} }}>
      <div className={`flex justify-end w-[100%] pt-[2rem] px-[4rem]  ${cls.projectReverserShell}`}>
        {
          isReverseFilter
            ? <Tippy content={t('reverseFilter')} className='hover'>
              <div
                className='px-[1rem] py-[1.5rem] rounded-[1rem] reverse hover z-10 cursor-pointer'
                onClick={defaultProjectsHandler}>
                <img src={reverseFilter} alt='↑•.' className='contours w-[4rem]' />
              </div>
            </Tippy>
            : <Tippy content={t('defaultFilter')} className='hover'>
              <div 
              className='px-[1rem] py-[1.5rem] rounded-[1rem] reverse hover z-10 cursor-pointer'
              onClick={reverseProjectsHandler}>
                <img src={defaultFilter} alt='↓•.' className='contours w-[4rem]' />
              </div>
            </Tippy>
        }
      </div>

      <motion.div className={cls.mainShell} initial='hidden' animate='visible'>
        {projectForMap.map((project) => (
          <Link key={project.id} to={`proj/?project=${project.id}`} >
            <motion.div className={cls.projectContainer} variants={appearingOfProjectCard} custom={project.id}>
              <div className={cls.projectName}>
                <h1>{project.name}</h1>
              </div>
              <div className={cls.projectImage}>
                <img src={project.previewImg} alt={project.name} className='hover' />
                <span className={cls.projectDescription}>
                  {project.date}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.main>

  )
}

export default Main
