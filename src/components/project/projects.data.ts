export interface IProject {
    name: string;
    id: string;
    url: string;
    previewImg: string;
    images: {
        url: string;
        title: string;
        id: string;
        currentDescription: string;
    }[];
    description: string;
    githubUrl: string;
    tools: {
        name: string;
        img: string
    }[];
    data: string;
}

const projects: IProject[] = [
    {
        name: 'name',
        id: 'DFKGDFJL847348934DFDFdd',
        url: 'https://www.randomUrl.com',
        previewImg: 'https://img.freepik.com/free-vector/people-discussing-presentation_52683-28613.jpg?\
        w=1380&t=st=1697653192~exp=1697653792~hmac=c0a1ec0f327418a0e1508511831b9f31c2cac2719e26eed7136927a06a0f32c5',
        images: [
            {
                url: 'https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?\
                w=1380&t=st=1697791798~exp=1697792398~hmac=926d7ef261444bb81476f9cb2ba68fdb6884b5b9de372e872fb32f005c0b39a1',
                title: 'image title',
                id: '1212sdf3d3sdfS#D#@Q@#F(F',
                currentDescription: 'nemo optio inventore dolores soluta vel placeat. Nisi, distinctio modi.\
                Suscipit libero fuga laboriosam quae incidunt, consequatur dolorum quidem'
            },
            {
                url: 'https://img.freepik.com/free-vector/people-discussing-presentation_52683-28613.jpg?\
                w=1380&t=st=1697653192~exp=1697653792~hmac=c0a1ec0f327418a0e1508511831b9f31c2cac2719e26eed7136927a06a0f32c5',
                title: 'title343',
                id: '1212sdf3d3sdfS#D#@Q@#F(F2',
                currentDescription: 'ur error, commodi porro? Laboriosam vero asperiores molestiae voluptate\
                sequi! Voluptatem nam illum'
            },
            {
                url: 'https://img.freepik.com/free-vector/new-employees-requiring-in-office-for-work-isolated-flat-vector\
                -illustration-cartoon-hr-manager-hiring-or-recruiting-personnel-recruitment-vacancy-and-business-concept\
                _74855-10118.jpg?w=1380&t=st=1697792024~exp=1697792624~hmac=ad09ca43004a0340809479453446658de9af79f485301\
                e0f2279eb1c245940b6',
                title: 'image title2',
                id: '1212sdf3d3sdfS#D#@Q@#F(F2',
                currentDescription: 'ore dolores soluta vel placeat. Nisi, distinctio modi.\
                Suscipit libero fuga laboriosam quae incidunt, consequatur dolorum quidem'
            }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
         Ab, et! Minus doloribus dolore, nisi, facilis voluptatum omnis labore\
          nemo optio inventore dolores soluta vel placeat. Nisi, distinctio modi.\
           Suscipit libero fuga laboriosam quae incidunt, consequatur dolorum quidem\
            hic, pariatur, temporibus autem nobis a beatae ad blanditiis inventore est officiis.\
             In repudiandae optio atque eos accusamus placeat quo tempora molestiae sit voluptate\
              minus consequatur error, commodi porro? Laboriosam vero asperiores molestiae voluptate\
              sequi! Voluptatem nam illum et laborum sapiente vero eos sequi tenetur, accusantium repellat\
               sint sed optio soluta pariatur dolorem quod autem placeat perspiciatis ipsam veritatis reiciendis\
                repellendus! Dignissimos, quae.',
        githubUrl: 'url',
        tools: [
            {
                name: 'react',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'js',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'html',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'css',
                img: 'https://skillicons.dev/icons?i=css',
            },
        ],
        data: '18.10.2023'

    },
    {
        name: 'name2',
        id: 'DFKGDFJL847348934DFD1Fdd2',
        url:'https://www.ranwomUrl.com',
        previewImg: 'https://img.freepik.com/free-vector/business-teamwork-concept-teamwork-leadership-effort-hard-work-team-strategy-concept-of-brainstorm-at-workshop-management-skills-vector-cartoon-illustration-flat-design_1150-56223.jpg?w=1380&t=st=1697652837~exp=1697653437~hmac=1ede437ef61c21df7b9be8b0160d745ff10eaac0c557d7ec20557add8bdf0bc2',
        images: [
            {
                url: 'sds',
                title: 'image title',
                id: '1212sdf3d3sdfS#D#@Q@#F(F',
                currentDescription: 'currentDescription'
            },
            {
                url: 'image ur2l',
                title: 'image title2',
                id: '1212sdddf3d3sdfS#D#dfdQ@#F(F2',
                currentDescription: 'currentDescription2'
            }
        ],
        description: 'description description description description',
        githubUrl: 'url',
        tools: [
            {
                name: 'react',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'js',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'html',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'css',
                img: 'https://skillicons.dev/icons?i=css',
            },
        ],
        data: '18.10.2023'

    },
    {
        name: 'name3',
        id: 'DFKGDFJL847348934Dsdfsdfsdf12FDFdd3',
        url:'https://www.ranwomUrl.com',
        previewImg: 'https://img.freepik.com/free-vector/hand-drawn-business-planning_23-2149150731.jpg?w=1380&t=st=1697652868~exp=1697653468~hmac=2315c471560741e1152634130ab5bbefc0c879b3f6c2e5c0e088db1d249299be',
        images: [
            {
                url: 'sdsdfs',
                title: 'image title',
                id: '1212sdf3d3sdfS#D#@Q@#F(F',
                currentDescription: 'currentDescription'
            },
            {
                url: 'image ur2l',
                title: 'image title2',
                id: '1212sdf3d3sdfS#D#@Q@#F(F2',
                currentDescription: 'currentDescription2'
            }
        ],
        description: 'description description description description',
        githubUrl: 'url',
        tools: [
            {
                name: 'react',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'js',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'html',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'css',
                img: 'https://skillicons.dev/icons?i=css',
            },
        ],
        data: '18.10.2023'

    }
]

export default projects