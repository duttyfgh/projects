import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import globe from '../../assets/globe.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';
import cls from './Header.module.css'
import { useTranslation } from "react-i18next"
import Tippy from '@tippyjs/react';

const Header = () => {
  const { toggle, mode, currentProject } = useContext(ThemeContext)

  const { i18n, t } = useTranslation()

  const setEnglishLanguage = () => {
    i18n.changeLanguage('en')
  }

  const setUkrainianLanguage = () => {
    i18n.changeLanguage('ua')
  }

  return (
    <header className={`${cls.header} borderB`}>
      <span className={cls.mainText}>DMYTRO LAGODICH PROJECTS •{currentProject &&
        <span className={`${cls.mainText} text-[#adadad] currentProject`}>{` ${currentProject}`}</span>}</span>
      <div className={cls.buttons}>
        <Tippy content={`${mode === 'light' ? t('header.themeDark') : t('header.themeLight')}`}>
          <div
            onClick={toggle}
            className={`${cls.themeModToggle} reverse`}>
            <img
              src={sun}
              alt="..."
              className={`contours ${cls.sun}`}
            />
            <img
              src={moon}
              alt="..."
              className={`contours ${cls.moon}`}
            />
            <div
              style={mode === 'light' ? { left: '4.9rem' } : { right: '4.8rem' }}
              className={`${cls.bool} default`}></div>
          </div>
        </Tippy>

        <Tippy content={i18n.resolvedLanguage === 'en' ? 'Choice Ukranian language' : 'Обрати Англійську мову'}>
          <div
            className='reverse p-[1rem] px-[1.1rem] rounded-[4rem] cursor-pointer hover flex gap-[0.5rem] h-[4rem] items-center w-[8.4rem]'
            onClick={i18n.resolvedLanguage === 'en' ? setUkrainianLanguage : setEnglishLanguage}
          >
            <img
              src={globe}
              alt="..."
              className='w-[2.5rem] h-[2.5rem] contours'
            />
            {
              i18n.resolvedLanguage === 'en'
                ? <div
                  className='flex gap-[0.5rem] items-center cursor-pointer'>
                  <img src="https://images.emojiterra.com/twitter/v13.1/512px/1f1fa-1f1f8.png" alt="EN" className='w-[3rem]' />
                </div>
                : <div
                  className='flex gap-[0.5rem] items-center cursor-pointer'>
                  <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f1fa-1f1e6.png" alt="UA" className='w-[3rem]' />
                </div>
            }
          </div>
        </Tippy>
      </div>
    </header>
  )
}

export default Header