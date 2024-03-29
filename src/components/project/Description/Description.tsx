import cls from './Description.module.css'

interface DescriptionProps {
    description: string
    title: string
}

const Description = ({ description, title }: DescriptionProps) => {
    return (
        <div className={cls.description}>
            <div className="borderB">
                <h2>
                    {title}
                </h2>
            </div>
            <p className={cls.text}>
                {description}
            </p>
        </div>
    )
}

export default Description