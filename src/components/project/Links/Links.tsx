import Tippy from "@tippyjs/react";
import { useTranslation } from "react-i18next";

interface LinksProps {
    links: [
        {
            name: string;
            url: string;
            img: string
        }
    ] | undefined
}

const Links = ({ links }: LinksProps) => {


    const { t } = useTranslation()

    return (
        <div className="w-[100%]">
            <div className="borderB">
                <h2 className="text-[4rem]">{t('project.links')}</h2>
            </div>
            <div className="flex gap-[2rem] mt-[2rem] mb-[4rem] flex-wrap">
                {links?.map(link => (
                    <div>
                        <Tippy content={link.name} offset={[0, 15]}>
                            <a href={link.url} target='_blank'>
                                <img
                                    src={link.img}
                                    alt={link.name}
                                    className='rounded-3xl mb-[0.5rem] cursor-pointer hover w-[360px] h-[202px] object-cover t' />
                                <span className="lg:hidden">{link.name}</span>
                            </a>
                        </Tippy>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Links