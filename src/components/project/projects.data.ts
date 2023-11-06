//way-of-samurai
import wayOfSamurai1 from '../../assets/way-of-samurai/itIncubator1.png'
import wayOfSamurai11 from '../../assets/way-of-samurai/itIncubator1.1.png'
import wayOfSamurai2 from '../../assets/way-of-samurai/itIncubator2.png'
import wayOfSamurai3 from '../../assets/way-of-samurai/itIncubator3.png'
import wayOfSamurai31 from '../../assets/way-of-samurai/itIncubator3.1.png'

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
    date: string;
}

const projects: IProject[] = [
    {
        name: "React way of samurai",
        id: "1REACT1WAY1OF1SAMURAI1",
        url: "#",
        previewImg: wayOfSamurai1,
        description: 'This was the course that introduced me to reactJS. In this course,\
         the topic of project architecture was revealed in great detail, here I got acquainted\
          with such concepts as FLUX architecture and the first principle of SOLID, namely the\
           principle of "single responsibility", also in it I got acquainted with OOP, HOK, HOOK,\
            etc. Here I learned how to send requests to the server using the axios library and how\
             to work with APIs and API Docs. This course is hosted on the "it-kamasutra" channel.\
              Unfortunately, this course had a rather old approach, there were old libraries and no\
               TS, and now such code is considered obsolete, but it gave me a very good base. I watch\
               videos on this channel from time to time. Also, in this course, some attention was paid to Jest tests.',
        githubUrl: "https://github.com/duttyfgh/react-way-of-samurai",
        date: "06.04.2023",
        images: [
            {
                url: wayOfSamurai2,
                title: "Login page",
                id: "2LOGIN2PAGE2",
                currentDescription: "When entering the site, if the user is not authorized,\
                 he was redirected to the login panel, the API did not allow users to register\
                  but allowed them to be authorized, registration was on the site 'https://social-network.samuraijs.com'.\
                   Information about the user, that is, his ID, was stored in localStorage, and this is where I learned to\
                    work with him."
            },
            {
                url: wayOfSamurai1,
                title: 'Profile page',
                id: '1USER1PAGE1',
                currentDescription: "Each user had a personal profile page that he could go to by\
                 clicking on his nickname in the header. Here was the personal information of each user.\
                  While creating this page, I learned how to get data from the server for a specific user.\
                  In this course, less attention was paid to design, so it didn't turn out very well for me.",
            },
            {
                url: wayOfSamurai11,
                title: "Edit profile",
                id: "1.1EDIT1.1PROFILE1.1",
                currentDescription: "Each user was able to change his page and change anything on it.\
                 To switch to this mode, you had to press the button with a brush, I was not aware of\
                  such a thing, there was a more demanding and boring approach, so I decided to do it\
                   my way. While making this page, I learned how to validate forms (unfortunately, a very\
                     old library was used that was written in OOP), and I also learned how to send POST and PUT requests.",

            },
            {
                url: wayOfSamurai3,
                title: "Users page",
                id: "3USERS3PAGE3",
                currentDescription: "This page displayed all users who registered on the website\
                 'https://social-network.samuraijs.com' and displayed minimal information about\
                  them, users could also be subscribed and unsubscribed. Here I learned how to do\
                   pagination and add query parameters to a GET request.\
                   Also, by clicking on a user, you went to his profile."
            },
            {
                url: wayOfSamurai31,
                title: "User page",
                id: "3.1AUTHER3.1USER3.1",
                currentDescription: "When going to the page of a specific user, all available information\
                 about the user was displayed, it was impossible to change it as one's own."
            },
        ],

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
            {
                name: 'jest',
                img: 'https://skillicons.dev/icons?i=jest'
            },
            {
                name: 'redux',
                img: 'https://skillicons.dev/icons?i=redux'
            },
            {
                name: 'axios',
                img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png'
            },
            {
                name: 'git',
                img: 'https://skillicons.dev/icons?i=git'
            }
        ],

    },
    {
        name: 'name2',
        id: 'DFKGDFJL847348934DFD1Fdd2',
        url: 'https://www.ranwomUrl.com',
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
        date: '18.10.2023'

    },
    {
        name: 'name3',
        id: 'DFKGDFJL847348934Dsdfsdfsdf12FDFdd3',
        url: 'https://www.ranwomUrl.com',
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
        date: '18.10.2023'

    }
]

export default projects