import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';
import cls from './Header.module.css'

const Header = () => {
  const { toggle, mode, currentProject } = useContext(ThemeContext)

  return (
    <header className={`${cls.header} borderB`}>
      <span className={cls.mainText}>DMYTRO LAGODICH PROJECTS{currentProject && ` •  ${currentProject}`}</span>
      <div
        onClick={toggle}
        title={`${mode === 'light' ? 'Click to set dark mode' : 'Click to set light mode'}`}
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
    </header>
  )
}

export default Header