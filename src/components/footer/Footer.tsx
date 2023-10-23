import cls from './Footer.module.scss'

const icons = [
  {
    url: 'https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Instagram.svg',
    link: 'https://www.instagram.com/dutyfgh/'
  },
  {
    url: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png ',
    link: 'https://www.linkedin.com/in/dmytro-lagodich-756949275/'
  },
  {
    url: 'https://cdn4.iconfinder.com/data/icons/socialcones/508/Telegram-512.png',
    link: 'https://t.me/dutyfgh'
  },
  {
    url: 'https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-512.png',
    link: 'https://github.com/duttyfgh'
  }
]

const Footer = () => {
  return (
    <footer className={`${cls.footer} borderT default`}>
      <span className={cls.mainText}>
        created and maintained •
        <a href="#" className={cls.link} target='_blank'> dutyfgh</a>
      </span>
      <div className={cls.icons}>
        {icons.map(icon => (
          <a key={icon.link} href={icon.link} target='_blank'>
            <img src={icon.url} alt="..." className="w-[5rem] hover" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer