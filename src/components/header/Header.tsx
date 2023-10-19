import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/Theme';
import cls from './Header.module.css'

const Header = () => {
  const { toggle, mode, currentProject } = useContext(ThemeContext)

  return (
    <header className="
        flex
        justify-between
        items-center  
        p-[6rem]
    ">
      <span className='text-[4rem] uppercase'>DMYTRO LAGODICH PROJECTS{currentProject && ` •  ${currentProject}`}</span>
      <div
        onClick={toggle}
        title={`${mode === 'light' ? 'Click to set dark mode' : 'Click to set light mode'}`}
        className='
      flex
      items-center
      justify-between
      w-[8rem]
      h-[4rem]
      p-[0.6rem]
      bg-black
      rounded-[10rem]
      relative   
      cursor-pointer  
      reverse 
      transition-all
      '>
        <img
          src={sun}
          alt="..."
          className={`w-[2rem] ml-2 select-none contours ${cls.sun}`}
        />

        <img
          src={moon}
          alt="..."
          className={`w-[2rem] mr-2 select-none contours ${cls.moon}`}
        />
        <div
          style={mode === 'light' ? { left: '4.9rem' } : { right: '4.8rem' }}
          className='
        w-[2.6rem]
        h-[2.6rem]
        absolute
        rounded-[50%]
        bg-white
        z-10
        transition-all
        default
        '></div>

      </div>
    </header>
  )
}

export default Header