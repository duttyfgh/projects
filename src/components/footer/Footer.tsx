import { useTranslation } from 'react-i18next'
import cls from './Footer.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import inst from '../../assets/inst.svg' 
import linkedIn from '../../assets/linkedIn.svg' 
import tg from '../../assets/tg.svg' 
import github from '../../assets/github.svg' 
import portfolio from '../../assets/portfolio.png' 

const icons = [
  {
    url: inst,
    link: 'https://www.instagram.com/dutyfgh/',
    title: 'dutyfgh'
  },
  {
    url: linkedIn,
    link: 'https://www.linkedin.com/in/dmytro-lagodich-756949275/',
    title: 'Dmytro Lagodich'
  },
  {
    url: tg,
    link: 'https://t.me/dutyfgh',
    title: 'dutyfgh'
  },
  {
    url: github,
    link: 'https://github.com/duttyfgh',
    title: 'duttyfgh'
  },
  {
    url: portfolio,
    link: 'https://duttyfgh.github.io/cv/',
    title: 'Resume'
  }
]

const Footer = () => {

  const { t } = useTranslation()

  return (
    <footer className={`${cls.footer} footerBg`}>
      <h1 className={cls.mainText} style={{color: '#d1dadd'}}>
        {t('footer')}
        <a
          href="https://github.com/duttyfgh"
          className={cls.link}
          target='_blank'> dutyfgh</a>
      </h1>
      <h1 style={{color: '#d1dadd'}}>{t('footerTitle')}</h1>
      <div className={cls.icons}>
        {icons.map(icon => (
          <Tippy content={icon.title} key={icon.link}>
            <a
              href={icon.link}
              target='_blank'
              className='bordeR p-4 rounded-[50%] bg-white hover'>
              <img src={icon.url} alt="..." className="w-[4.8rem] hover" />
            </a>
          </Tippy>
        ))}
      </div>
    </footer>
  )
}

export default Footer