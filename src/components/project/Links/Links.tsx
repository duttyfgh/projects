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
    return (
        <div>
            <div className="borderB">
                <span className="text-[4rem]">Links</span>
            </div>
            <div className="flex gap-[2rem] mt-[2rem] mb-[4rem] flex-wrap">
                {links?.map(link => (
                    <div>
                        <a href={link.url} title='Click to follow the link' target='_blank'>
                            <img
                                src={link.img}
                                alt={link.name}
                                className='rounded-3xl mb-[0.5rem] cursor-pointer hover w-[360px] h-[202px]' />
                            <span className="text-[2.4rem]">{link.name}</span>
                        </a>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Links