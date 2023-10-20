import projects from '../project/projects.data.js'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <div className="h-[80vh] flex justify-center items-center">
        <div className='flex gap-[8rem]'>
          {
            projects.map(project => (
              <Link key={project.id} to={`/proj/?project=${project.id}`}>
                <div className='rounded-[2rem] overflow-hidden'>
                  <div className='text-center text-[2.8rem] pb-4 uppercase'>
                    {project.name}
                  </div>
                  <div className='w-[50rem] h-[30rem] overflow-hidden rounded-3xl'>
                    <img
                      src={project.previewImg}
                      alt={project.name}
                      className='
                            w-[50rem]
                            h-[30rem]
                            border
                            rounded-3xl
                            object-cover
                            cursor-pointer
                            transition-all
                            hover

                    ' />
                  </div>
                </div>
              </Link>
            ))}
        </div>

      </div>

    </main>
  )
}

export default Main
// hover:w-[53rem]