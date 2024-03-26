import { useTranslation } from 'react-i18next'
import cls from './Footer.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import inst from '../../assets/inst.svg'
import linkedIn from '../../assets/linkedIn.svg'
import tg from '../../assets/tg.svg'
import github from '../../assets/github.svg'
import portfolio from '../../assets/portfolio.png'
import { Variants, motion } from 'framer-motion'

const icons = [
  {
    url: inst,
    link: 'https://www.instagram.com/dutyfgh/',
    title: 'dutyfgh',
    id: 1
  },
  {
    url: linkedIn,
    link: 'https://www.linkedin.com/in/dmytro-lagodich-756949275/',
    title: 'Dmytro Lagodich',
    id: 2
  },
  {
    url: tg,
    link: 'https://t.me/dutyfgh',
    title: 'dutyfgh',
    id: 3
  },
  {
    url: github,
    link: 'https://github.com/duttyfgh',
    title: 'duttyfgh',
    id: 4
  },
  {
    url: portfolio,
    link: 'https://duttyfgh.github.io/cv/',
    title: 'Resume',
    id: 5
  }
]

const appearingOfIcons: Variants = {
  hidden: {
    y: 100,
    opacity: 0

  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {  delay: custom / 10 }
  })
}

const Footer = () => {

  const { t } = useTranslation()

  return (
    <motion.footer className={`${cls.footer} footerBg overflow-hidden`} initial='hidden' whileInView='visible' viewport={{once: true}}>
      <h1 className={cls.mainText} style={{ color: '#d1dadd' }}>
        {t('footer')}
        <a
          href="https://github.com/duttyfgh"
          className={cls.link}
          target='_blank'> dutyfgh</a>
      </h1>
      <h1 style={{ color: '#d1dadd' }}>{t('footerTitle')}</h1>
      <div className={cls.icons}>
        {icons.map(icon => (
          <Tippy content={icon.title} key={icon.id}>
            <motion.a
              href={icon.link}
              target='_blank'
              className='bordeR p-4 rounded-[50%] bg-white hover'
              variants={appearingOfIcons}
              custom={icon.id}>
              <img src={icon.url} alt="..." className="w-[4.8rem] hover t" />
            </motion.a>
          </Tippy>
        ))}
      </div>
    </motion.footer>
  )
}

export default Footer