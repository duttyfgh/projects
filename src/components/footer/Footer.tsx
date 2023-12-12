import { useTranslation } from 'react-i18next'
import cls from './Footer.module.scss'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const icons = [
  {
    url: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Instagram.svg',
    link: 'https://www.instagram.com/dutyfgh/',
    title: 'Instagram: dutyfgh'
  },
  {
    url: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png ',
    link: 'https://www.linkedin.com/in/dmytro-lagodich-756949275/',
    title: 'Linkedin: Dmytro Lagodich'
  },
  {
    url: 'https://cdn4.iconfinder.com/data/icons/socialcones/508/Telegram-512.png',
    link: 'https://t.me/dutyfgh',
    title: 'Telegram: dutyfgh'
  },
  {
    url: 'https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-512.png',
    link: 'https://github.com/duttyfgh',
    title: 'Guthub: duttyfgh'
  }
]

const Footer = () => {

  const { t } = useTranslation()

  return (
    <footer className={`${cls.footer} borderT default`}>
      <span className={cls.mainText}>
        {t('footer')}
        <a
          href="https://github.com/duttyfgh"
          className={cls.link}
          target='_blank'> dutyfgh</a>
      </span>
      <span>{t('footerTitle')}</span>
      <div className={cls.icons}>
        {icons.map(icon => (
          <Tippy content={icon.title} key={icon.link}>
            <a
              href={icon.link}
              target='_blank'>
              <img src={icon.url} alt="..." className="w-[5rem] hover" />
            </a>
          </Tippy>
        ))}
      </div>
    </footer>
  )
}

export default Footer