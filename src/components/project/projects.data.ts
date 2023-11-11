//way-of-samurai
import wayOfSamurai1 from '../../assets/way-of-samurai/itIncubator1.png'
import wayOfSamurai11 from '../../assets/way-of-samurai/itIncubator1.1.png'
import wayOfSamurai2 from '../../assets/way-of-samurai/itIncubator2.png'
import wayOfSamurai3 from '../../assets/way-of-samurai/itIncubator3.png'
import wayOfSamurai31 from '../../assets/way-of-samurai/itIncubator3.1.png'

//kids-sport
import kidsSports1 from '../../assets/kids-sport/kidsSports1.png'
import kidsSports12 from '../../assets/kids-sport/kidsSports1.2.png'
import kidsSports2 from '../../assets/kids-sport/kidsSports2.png'
import kidsSports3 from '../../assets/kids-sport/kidsSports3.png'
import kidsSports4 from '../../assets/kids-sport/kidsSports4.png'

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
        name: "Kids sport cherkas",
        id: "2KIDS2SPORT2CHERCAS2",
        url: "https://duttyfgh.github.io/kids-sport-cherkas",
        previewImg: kidsSports1,
        description: "Hello, I made this website on request for my mom's\
         acquaintance who was involved in youth sports. This site features news\
          about youth sports in Cherkasy. For me, it was my first experience creating\
           a custom website. At that time, there were many things I didn't know, but through\
            this project, I learned, such as working with clients. I didn't just come up with\
             this site out of my head; the client provided real tasks that I implemented. Currently,\
              the site is unfinished, but both the back-end and front-end are written for it. Development\
               has been halted due to a lack of funding. The site is fully responsive, adapted for various\
                devices ranging from 1640px to 320px. I tried to write the code as cleanly as possible, using\
                 the FLUX architecture, but at that time, my knowledge was insufficient to create a completely\
                  correct architecture. Currently, the site has placeholder content unrelated to youth sports;\
                   I added it just to see how it would look with real photos.",
        githubUrl: "https://github.com/duttyfgh/kids-sport-cherkas/",
        date: "26.05.2023",
        images: [
            {
                url: kidsSports1,
                title: "Main page",
                id: "1MAIN1PAGE1KIDS1SPORT1",
                currentDescription: "This is the main page of the website, where the first prominent section\
                 displays the four most relevant news articles. When a new article is added to the site, this\
                  banner is updated to reflect the latest information. Clicking on any of these banners was intended\
                   to redirect the user to the page featuring the respective news article. Unfortunately, I couldn't\
                    implement this functionality because it required a deployed server, and there were no funds available\
                     for the client to cover the cost."
            },
            {
                url: kidsSports12,
                title: "News in main page",
                id: "1.2NEWS.1.2IN1.2MAIN1.2PAGE1.2KIDS1.2SPORT1.2",
                currentDescription: 'Being on the main page and scrolling down, the user would come across the latest news.\
                 The first and most prominent one was the most current news, containing more information such as the headline,\
                  description, date, and a button to navigate to the full article. Further down were all the other news articles.\
                   I implemented a safeguard so that if an admin adds a news article without a title or image, the title will change\
                    to "None," and the image will be replaced with a placeholder featuring an empty picture. This was done in case an\
                     admin adds a damaged image.',
            },
            {
                url: kidsSports2,
                title: "News page",
                id: "2NEWS2KIDS2SPORT2",
                currentDescription: `The "News" page is a feed of all the site's news. It was supposed to have\
                 a search field for news articles, but this feature was not implemented because the server was not\
                  deployed. Each news article had a "type" value, and they were sorted into pages such as "Football,"\
                   "Basketball," etc., based on this value. However, there were also news articles here with all types\
                    combined. In this section, only placeholders are displayed, not real news. Articles with a different\
                     type, i.e., not football or basketball, did not have their own dedicated pages, so they were placed \
                     on the "Other Sports" page.`
            },
            {
                url: kidsSports3,
                title: "About us page",
                id: "3ABOUT3US3KIDS3SPORT3",
                currentDescription: `The "About Us" page described the essence of the website. \
                Pages like "Video" or "Contacts" were not created because the client was not very\
                 involved in the development of this site. Instead of these pages, a temporary "404\
                  error" page was displayed.`
            },
            {
                url: kidsSports4,
                title: "Admin page",
                id: "4ADMIN4PAGE4KIDS4SPORT4",
                currentDescription: "If you were an admin, upon accessing the admin page, buttons were displayed\
                 allowing you to log out of the admin account or add a news article. The news article addition page\
                  had a very simple validation because, at that time, I didn't know how to use Formik. Therefore, the\
                   validation was only based on length. After adding a news article, it immediately became the most\
                    current and was displayed as the first on the main page."
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
                name: 'ts',
                img: 'https://skillicons.dev/icons?i=ts',
            },
            {
                name: 'redux',
                img: 'https://skillicons.dev/icons?i=redux',
            },
            {
                name: 'git',
                img: 'https://skillicons.dev/icons?i=git',
            },
        ],
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