import Tools from "../Tools/Tools"
import { IProject } from "../projects.data"
import ImgCarousel from '../../../carousel/imgCarousel/ImgCarousel'
import { Link } from "react-router-dom"
import back from '../../../assets/back.png'
import Links from "../Links/Links"
import { useTranslation } from "react-i18next"
import Description from "../Description/Description"

interface ProjectForDesktopProps {
  filteredProject: IProject | null,
}

const ProjectForDesktop = ({ filteredProject }: ProjectForDesktopProps) => {

  const { t } = useTranslation()

  return (
    <>
      <div className="w-[10rem] overflow-hidden">
        <Link to="/projects/">
          <img
            src={back}
            alt="<- back"
            className='contoursReverse hover w-[6rem] cursor-pointer m-[4rem]'
          />
        </Link>
      </div>

      <div className="h-auto flex flex-col pr-[6rem] pl-[6rem] default">

        <Description title={t('project.desc')} description={t(`project.${filteredProject?.name}.description`)} />

        <div className="flex flex-col items-center w-[100%]">
          <ImgCarousel filteredProject={filteredProject}>
            {filteredProject?.images.map(img => (
              <img key={img.id} src={img.url} alt={img.title} className={`rounded-2xl`} />
            ))}
          </ImgCarousel>
        </div>

        <Tools tools={filteredProject?.tools || []} />

        {filteredProject?.links && <Links links={filteredProject?.links} />}

      </div>
    </>
  )
}

export default ProjectForDesktop