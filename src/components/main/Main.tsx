import projects from '../project/projects.data.js'
import { Link } from 'react-router-dom'
import cls from './Main.module.css'

const Main = () => {
  return (
    <main className={`${cls.main} default`}>
      <div className={cls.mainShell}>
        {projects.map((project) => (
          <Link key={project.id} to={`/proj/?project=${project.id}`}>
            <div className={cls.projectContainer}>
              <div className={cls.projectName}>
                {project.name}
              </div>
              <div className={`${cls.projectImage} bordeR`}>
                <img src={project.previewImg} alt={project.name} className='hover' />
                <span className={cls.projectDescription}>
                  {project.data}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>

  )
}

export default Main
