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

//github searcher
import githubSearch from '../../assets/github-search/githubSearch.png'
import githubSearch2 from '../../assets/github-search/githubSearch2.png'
import githubSearch3 from '../../assets/github-search/githubSearch3.png'
import githubSearch4 from '../../assets/github-search/githubSearch4.png'
import githubSearch5 from '../../assets/github-search/githubSearch5.png'

//cat money
import catMoney1 from '../../assets/catMoney/catMoney1.png'
import catMoney2 from '../../assets/catMoney/catMoney2.png'
import catMoney3 from '../../assets/catMoney/catMoney3.png'
import catMoney4 from '../../assets/catMoney/catMoney4.png'
import catMoney5 from '../../assets/catMoney/catMoney5.png'

//next-project
import nextproject from '../../assets/nextproject/nextproject.png'
import nextproject2 from '../../assets/nextproject/nextproject2.png'
import nextproject3 from '../../assets/nextproject/nextproject3.png'
import nextproject4 from '../../assets/nextproject/nextproject4.png'
import nextproject5 from '../../assets/nextproject/nextproject5.png'
import figmaDesign from '../../assets/nextproject/figmaDesign.png'

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
    links?: [
        {
            name: string;
            url: string;
            img: string
        }
    ]
}

const projects: IProject[] = [
    {
        name: "React way of samurai",
        id: "1REACT1WAY1OF1SAMURAI1",
        url: "https://youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&si=602IsCtOBkiQRqxl",
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
                name: 'React',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'JS',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'HTML',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'CSS',
                img: 'https://skillicons.dev/icons?i=css',
            },
            {
                name: 'Jest',
                img: 'https://skillicons.dev/icons?i=jest'
            },
            {
                name: 'Redux',
                img: 'https://skillicons.dev/icons?i=redux'
            },
            {
                name: 'Axios',
                img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png'
            },
            {
                name: 'Git',
                img: 'https://skillicons.dev/icons?i=git'
            }
        ],
        links: [
            {
                name: 'Youtube: React way of samurai',
                url: "https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
                img: 'https://i.ytimg.com/vi/gb7gMluAeao/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAqmCOY4eyRZmACbwJYJzkz9loZAg'
            }
        ]

    },
    {
        name: "Kids sport cherkas",
        id: "2KIDS2SPORT2CHERCAS2",
        url: "https://duttyfgh.github.io/kids-sport-cherkas",
        previewImg: kidsSports1,
        description: "I made this website on request for my mom's\
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
                name: 'React',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'JS',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'HTML',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'CSS',
                img: 'https://skillicons.dev/icons?i=css',
            },
            {
                name: 'TS',
                img: 'https://skillicons.dev/icons?i=ts',
            },
            {
                name: 'RTK',
                img: 'https://skillicons.dev/icons?i=redux',
            },
            {
                name: 'Git',
                img: 'https://skillicons.dev/icons?i=git',
            },
        ],
    },
    {
        name: "Github searcher",
        id: "3GITHUB3SEARCHER3",
        url: "https://duttyfgh.github.io/search-engine-for-github-repositories",
        previewImg: githubSearch,
        description: "This website is created for searching repositories by username on GitHub.\
         I built this site following a tutorial on YouTube. I developed this site about 4 times,\
           and this was the last time I did it entirely on my own. Initially, I wanted to understand\
            how it works, and then I reproduced my knowledge in this website.\
            While creating the site, I learned to use Redux Toolkit Query, and I also dedicated some attention to\
            creating custom hooks.Additionally, the site involves working with localStorage.The tutorial in the video\
            showed a simpler version of the site, but I made it more complex for my own learning.The site is fully responsive\
            for mobile devices.",
        githubUrl: "https://github.com/duttyfgh/search-engine-for-github-repositories",
        date: "06.06.2023",
        images: [
            {
                url: githubSearch,
                title: "Main page",
                id: "3MAIN3GITHUB3SEARCHER3",
                currentDescription: 'The main page of the website was designed in a very minimalistic\
                 style. The site has 2 pages, "Home" and "Favorites." Using react-router-dom and NavLink,\
                  I made it so that it indicates which page the user is currently on.'
            },
            {
                url: githubSearch2,
                title: "Live search",
                id: "2SEARCH2GITHUB2SEARCHER2",
                currentDescription: "When the user entered a GitHub nickname with at least 3 characters,\
                 autosearch was triggered. Clicking on the user opened information about them, and the dropdown disappeared."
            },
            {
                url: githubSearch3,
                title: "User repositories",
                id: "3USER3GITHUB3SEARCHER3",
                currentDescription: "When clicking on the user, a list of their repositories would open,\
                 displaying information about each specific repository. Also, on the right side of each\
                  repository card, there was a star. Clicking on the star added the repository to favorites.\
                   If the star was already pressed, clicking on it removed the repository from the favorites list."
            }, {
                url: githubSearch4,
                title: "Favorites page",
                id: "4FAVOURITES4GITHUB4SEARCH4",
                currentDescription: "The 'Favorites' page displayed the selected repositories. There was also\
                 an option to remove a repository from favorites by clicking on the star. If the user had no\
                  selected repositories, the message 'No items' was displayed. Selected repositories were stored\
                   in localStorage. Additionally, clicking on a repository redirected the user to its GitHub page."
            },
            {
                url: githubSearch5,
                title: "Showing error",
                id: "5ERROR5GITHUB5SEARCHER5",
                currentDescription: 'Also, if the server issues an error, it will be displayed to the user as "Something went wrong...".'
            },

        ],
        tools: [
            {
                name: 'React',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'JS',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'HTML',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'CSS',
                img: 'https://skillicons.dev/icons?i=css',
            },
            {
                name: 'RTK',
                img: 'https://skillicons.dev/icons?i=redux',
            },
            {
                name: 'Git',
                img: 'https://skillicons.dev/icons?i=git',
            },
            {
                name: 'Github',
                img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            },
            {
                name: 'Tailwind',
                img: 'https://skillicons.dev/icons?i=tailwind',
            },
        ],
        links: [
            {
                name: 'React стек 2022. TypeScript, Redux Toolkit, RTKQuery, Tailwind',
                img: 'https://i.ytimg.com/vi/lkbm-zlcFvs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb3sH1BkgOs0G9xD1SisXyDCpPzg',
                url: 'https://www.youtube.com/watch?v=lkbm-zlcFvs&pp=ygVCUmVhY3Qg0YHRgtC10LogMjAyMi4gVHlwZVNjcmlwdCwgUmVkdXggVG9vbGtpdCwgUlRLUXVlcnksIFRhaWx3aW5k'
            }
            
        ]


    },
    {
        name: "Cat Money",
        id: "1CAT1MONEY1",
        url: "https://kot-money-com.vercel.app/",
        previewImg: catMoney1,
        description: "Cat Money is a startup from Moldova, where people can perform and post\
         tasks related to promoting their businesses online. This was my first experience working in a team.\
          It was a commercial project, not an educational one, so I didn't learn anything new here.\
           Currently, development has been halted due to a lack of a designer. The website was not\
            fully implemented for the same reason.\
        I worked on the frontend based on the design from Figma and\
         implemented user registration and login functionality.\
            as well as handling user registration and login.",
        githubUrl: "https://github.com/abubakrDevop/CatMoney",
        date: "06.20.2023",
        images: [
            {
                url: catMoney1,
                title: "Main page",
                id: "1CAT1MONEY1MAIN1",
                currentDescription: "The main page of the website is fully responsive for all devices,\
                 as is the entire site. The page features two buttons, although they currently lack functionality."
            },
            {
                url: catMoney2,
                title: "Login page",
                id: "2CAT2MONEY2LOGIN2",
                currentDescription: "The Login page, with all validation implemented using the Formik\
                 and Yup libraries. After a successful login, the user was redirected to the main page\
                  and instead of the 'Login' button in the header, there was a button to access the user's\
                   personal profile. Currently, the server is not deployed, so registration is not possible upon visiting the site."
            },
            {
                url: catMoney3,
                title: "Forgot password page",
                id: "3CAT3MANEY3EMAIL3SENDER3",
                currentDescription: "During registration, if a user forgot their password,\
                 there was an option to reset it. The password reset process consisted of two pages:\
                  Email sender and Set new password. After successfully filling out these forms,\
                   the user was automatically logged in with the new password and redirected to the homepage."
            },
            {
                url: catMoney4,
                title: "Register page",
                id: "4CAT4MONEY4REGISTER4",
                currentDescription: "Registration Page: It was not possible to register an account with a login that had already been registered. Additionally, Yup was used to validate and ensure the password was entered correctly."
            },
            {
                url: catMoney5,
                title: "Please register",
                id: "5PLEASE5REGISTER5CAT5MONEY",
                currentDescription: "If a user was not registered and attempted to access a specific page, they were redirected to the 'Please register' page, indicating that access to the site was restricted for unregistered users. This page retained the old design, and if the project continues to develop, it will be updated."
            },
        ],
        tools: [
            {
                name: 'React',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'JS',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'HTML',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'CSS',
                img: 'https://skillicons.dev/icons?i=css',
            },
            {
                name: 'SCSS',
                img: 'https://skillicons.dev/icons?i=scss',
            },
            {
                name: 'Formik',
                img: 'https://img.stackshare.io/service/8846/preview.png',
            },
            {
                name: 'Redux',
                img: 'https://skillicons.dev/icons?i=redux',
            },
        ]
    },
    {
        name: "next-project",
        id: "5NEXT5PROJECT5",
        url: "https://nextapp-one-puce.vercel.app/",
        previewImg: nextproject,
        description: `I created this project through a YouTube course,\
          but I customized many aspects to suit my preferences. This website is built using\
           Next.js 13 with app routing. For user authentication, I implemented Google Auth on this site.\
            It's a full-stack app with a straightforward backend, although in most cases, I didn't memorize\
             anything from the backend and simply rewrote the code. I also designed the site's adaptation in\
              Figma at . `,
        githubUrl: "https://github.com/duttyfgh/Advansed-next-project",
        date: "27.08.2023 ",
        images: [
            {
                url: nextproject,
                title: "Main page",
                id: "1MAIN1NEXT1PROJECT1",
                currentDescription: "Головна сторінка трохи відрізняєтся дизайном від того дизайну\
                 що був запропонований в відео. Був застосований useContext від React щоб зробити\
                  перемикач тем(темна/світла). Якщо юзер на зареестрований то показуєтся іконка переходу\
                   на реестрацію, або якщо зареестрований то показуется іконка для переходу на особистий акаунт."
            },

            {
                url: nextproject2,
                title: "Portfolio",
                id: "2PORTFOLIO2NEXT2PROJECT2",
                currentDescription: "The portfolio page contained 3 links, and if you\
                 click on one of them, the user will be redirected to a page that tells about\
                  one of the topics chosen by the user. Here, nested routing was applied: portfolio/[id]."
            },
            {
                url: nextproject3,
                title: "Posts",
                id: "3POST3NEXT3PROJECT3",
                currentDescription: "The Posts page was a feed of posts added by users.\
                 Clicking on any of the posts triggered an embedded routing [id]. This page,\
                  along with several others that fetched data from the server, featured skeleton loading.\
                   The page displayed all the information about the post."
            },
            {
                url: nextproject4,
                title: "Login page",
                id: "4LOGIN4NEXT4PROJECT4",
                currentDescription: "The login page authenticated users. Users could manually enter\
                 their data or log in through Google. If the user did not have an account before, they\
                  could register through the register page. After authentication or registration,\
                   the user was redirected to their profile."
            },
            {
                url: nextproject5,
                title: "User profile",
                id: "5USER5PROFILE5NEXT5PROJECT5",
                currentDescription: "If a registered user navigates to their profile,\
                they will land on a page where they can view their existing posts or create a new post.\
                Clicking the 'Create new post' button opens a modal window with a form for creating a new post.\
                Additionally, there was a 'Logout' button, clicking on which would log the user out."
            },
        ],
        tools: [
            {
                name: 'React',
                img: 'https://skillicons.dev/icons?i=react',
            },
            {
                name: 'JS',
                img: 'https://skillicons.dev/icons?i=js',
            },
            {
                name: 'HTML',
                img: 'https://skillicons.dev/icons?i=html',
            },
            {
                name: 'CSS',
                img: 'https://skillicons.dev/icons?i=css',
            },
            {
                name: 'NextJS',
                img: 'https://skillicons.dev/icons?i=next',
            },
            {
                name: 'Tailwind',
                img: 'https://skillicons.dev/icons?i=tailwind',
            },
            {
                name: 'Google Auth',
                img: 'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg',
            },
            {
                name: 'Formik',
                img: 'https://img.stackshare.io/service/8846/preview.png',
            },
            
            

        ],
        links: [
            {
                name: 'Yourube: Новый Крутой Проект на Next 13.4 (React Js) #reactjs #nextjs #nextjs13',
                url: 'https://www.youtube.com/watch?v=EM8A1zYZuw4&pp=ygUMbmV4dCBwcm9qZWN0',
                img: 'https://i.ytimg.com/vi/EM8A1zYZuw4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC_f0OjDypnC2Zd0hkOkjx2F2GlQ'
            },
            //@ts-ignore
            {
                name: 'Figma: adapted design',
                url: 'https://www.figma.com/file/Yc8PDOFHVqejZ4OWyFLIru/Untitled?type=design&node-id=0%3A1&mode=design&t=NyrXAY9VxETNVZo5-1',
                img: figmaDesign
            }
        ]
    }
]

export default projects