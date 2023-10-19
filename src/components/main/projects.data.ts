export interface IProject {
    name: string;
    id: string;
    previewImg: string;
    images: {
        url: string;
        title: string;
        id: string;
        currentDescription: string;
    }[];
    description: string;
    githubUrl: string;
    tools: string[];
    data: string;
}

const projects: IProject[] = [
    {
        name: 'name',
        id: 'DFKGDFJL847348934DFDFdd',
        previewImg: 'https://img.freepik.com/free-vector/people-discussing-presentation_52683-28613.jpg?w=1380&t=st=1697653192~exp=1697653792~hmac=c0a1ec0f327418a0e1508511831b9f31c2cac2719e26eed7136927a06a0f32c5',
        images: [
            {
                url: 'image url',
                title: 'image title',
                id: '1212sdf3d3sdfS#D#@Q@#F(F',
                currentDescription: 'currentDescription'
            },
            {
                url: 'ds',
                title: 'image title2',
                id: '1212sdf3d3sdfS#D#@Q@#F(F2',
                currentDescription: 'currentDescription2'
            }
        ],
        description: 'description description description description',
        githubUrl: 'url',
        tools: ['react', 'js', 'scss', 'html'],
        data: '18.10.2023'

    },
    {
        name: 'name2',
        id: 'DFKGDFJL847348934DFDFdd2',
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
                id: '1212sdf3d3sdfS#D#@Q@#F(F2',
                currentDescription: 'currentDescription2'
            }
        ],
        description: 'description description description description',
        githubUrl: 'url',
        tools: ['react', 'js', 'scss', 'html'],
        data: '18.10.2023'

    },
    {
        name: 'name3',
        id: 'DFKGDFJL847348934DFDFdd3',
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
        tools: ['react', 'js', 'scss', 'html'],
        data: '18.10.2023'

    }
]

export default projects