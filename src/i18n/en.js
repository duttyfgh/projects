export const en = {
    "header": {
        "themeDark": "Set dark mode",
        "themeLight": "Set light mode"
    },
    "project": {
        "desc": "Description",
        "React way of samurai": {
            "description": "This was the course that introduced me to reactJS. In this course, the topic of project architecture was revealed in great detail, here I got acquainted with such concepts as FLUX architecture and the first principle of SOLID, namely the principle of 'single responsibility', also in it I got acquainted with OOP, HOK, HOOK, etc. Here I learned how to send requests to the server using the axios library and how to work with APIs and API Docs. This course is hosted on the 'it-kamasutra' channel. Unfortunately, this course had a rather old approach, there were old libraries and no TS, and now such code is considered obsolete, but it gave me a very good base. I watch videos on this channel from time to time. Also, in this course, some attention was paid to Jest tests.",
            "slider": {
                "Login page": "When entering the site, if the user is not authorized, he was redirected to the login panel, the API did not allow users to register but allowed them to be authorized, registration was on the site 'https://social-network.samuraijs.com'. Information about the user, that is, his ID, was stored in localStorage, and this is where I learned to work with him.",
                "Profile page": "Each user had a personal profile page that he could go to by clicking on his nickname in the header. Here was the personal information of each user. While creating this page, I learned how to get data from the server for a specific user. In this course, less attention was paid to design, so it didn't turn out very well for me.",
                "Edit profile": "Each user was able to change his page and change anything on it. To switch to this mode, you had to press the button with a pancil, I was not aware of such a thing, there was a more demanding and boring approach, so I decided to do it my way. While making this page, I learned how to validate forms (unfortunately, a very old library was used that was written in OOP), and I also learned how to send POST and PUT requests.",
                "Users page": "This page displayed all users who registered on the website 'https://social-network.samuraijs.com' and displayed minimal information about them, users could also be subscribed and unsubscribed. Here I learned how to do pagination and add query parameters to a GET request. Also, by clicking on a user, you went to his profile.",
                "User page": "When going to the page of a specific user, all available information about the user was displayed, it was impossible to change it as one's own."
            }
        },
        "Kids sport cherkas": {
            "description": "I made this website to order. This site features news about youth sports in Cherkasy. For me, it was my first experience creating a custom website. At that time, there were many things I didn't know, but through this project, I learned, such as working with clients. I didn't just come up with this site out of my head; the client provided real tasks that I implemented. Currently, the site is unfinished, but both the back-end and front-end are written for it. Development has been halted due to a lack of funding. The site is fully responsive, adapted for various devices ranging from 1640px to 320px. I tried to write the code as cleanly as possible, using the FLUX architecture, but at that time, my knowledge was insufficient to create a completely correct architecture. Currently, the site has placeholder content unrelated to youth sports.",
            "slider": {
                "Main page": "This is the main page of the website, where the first prominent section displays the four most relevant news articles. When a new article is added to the site, this banner is updated to reflect the latest information. Clicking on any of these banners was intended to redirect the user to the page featuring the respective news article. Unfortunately, I couldn't implement this functionality because it required a deployed server, and there were no funds available for the client to cover the cost.",
                "News in main page": "Being on the main page and scrolling down, the user to the rest of the news articles. The first and largest section featured the most current news, providing more information such as the headline, description, date, and a button to navigate to the full article. A bit further down, all other news articles were displayed. I implemented a safeguard: if an admin adds a news article without a title or image, the title is set to 'None' and the image is replaced with a placeholder featuring an empty picture. This was done in case the admin added a damaged image, ensuring the site remained functional.",
                "News page": "The 'News' page is a feed of all the site's news. It was supposed to have a search field for news articles, but this feature was not implemented because the server was not deployed. Each news article had a 'type' value, and they were sorted into pages such as 'Football,' 'Basketball,' etc., based on this value. However, there were also news articles here with all types combined. In this section, only placeholders are displayed, not real news. Articles with a different type, i.e., not football or basketball, did not have their own dedicated pages, so they were placed on the 'Other Sports' page.",
                "About us page": "The 'About Us' page described the essence of the website. Pages like 'Video' or 'Contacts' were not created because the client was not very involved in the development of this site. Instead of these pages, a temporary '404 error' page was displayed.",
                "Admin page": "If you were an admin, upon accessing the admin page, buttons were displayed allowing you to log out of the admin account or add a news article. The news article addition page had a very simple validation because, at that time, I didn't know how to use Formik. Therefore, the validation was only based on length. After adding a news article, it immediately became the most current and was displayed as the first on the main page."
            }
        },
        "Github searcher": {
            "description": "This website is created for searching repositories by username on GitHub. I built this site following a tutorial on YouTube. I developed this site about 4 times, and this was the last time I did it entirely on my own. Initially, I wanted to understand    how it works, and then I reproduced my knowledge in this website. While creating the site, I learned to use Redux Toolkit Query, and I also dedicated some attention to creating custom hooks.Additionally, the site involves working with localStorage.The tutorial in the video showed a simpler version of the site, but I made it more complex for my own learning.The site is fully responsive for mobile devices.",
            "slider": {
                "Main page": "The main page of the website was designed in a very minimalistic style. The site has 2 pages, 'Home' and 'Favorites.' Using react-router-dom and NavLink, I made it so that it indicates which page the user is currently on.",
                "Live search": "When the user entered a GitHub nickname with at least 3 characters, autosearch was triggered. Clicking on the user opened information about them, and the dropdown disappeared.",
                "User repositories": "When clicking on the user, a list of their repositories would open, displaying information about each specific repository. Also, on the right side of each repository card, there was a star. Clicking on the star added the repository to favorites. If the star was already pressed, clicking on it removed the repository from the favorites list.",
                "Favorites page": "The 'Favorites' page displayed the selected repositories. There was also an option to remove a repository from favorites by clicking on the star. If the user had no  selected repositories, the message 'No items' was displayed. Selected repositories were stored in localStorage. Additionally, clicking on a repository redirected the user to its GitHub page.",
                "Showing error": "Also, if the server issues an error, it will be displayed to the user as 'Something went wrong...'"
            }
        },
        "Cat Money": {
            "description": "Cat Money is a startup from Moldova, where people can perform and post tasks related to promoting their businesses online. This was my first experience working in a team. It was a commercial project, not an educational one, so I didn't learn anything new here. Currently, development has been halted due to a lack of a designer. The website was not fully implemented for the same reason.I worked on the frontend based on the design from Figma and implemented user registration and login functionality as well as handling user registration and login.",
            "slider": {
                "Main page": "The main page of the website is fully responsive for all devices, as is the entire site. The page features two buttons, although they currently lack functionality.",
                "Login page": "The Login page, with all validation implemented using the Formik and Yup libraries. After a successful login, the user was redirected to the main page and instead of the 'Login' button in the header, there was a button to access the user's personal profile. Currently, the server is not deployed, so registration is not possible upon visiting the site.",
                "Forgot password page": "During registration, if a user forgot their password, there was an option to reset it. The password reset process consisted of two pages: Email sender and Set new password. After successfully filling out these forms, the user was automatically logged in with the new password and redirected to the homepage.",
                "Register page": "Registration Page: It was not possible to register an account with a login that had already been registered. Additionally, Yup was used to validate and ensure the password was entered correctly.",
                "Please register": "If a user was not registered and attempted to access a specific page, they were redirected to the 'Please register' page, indicating that access to the site was restricted for unregistered users. This page retained the old design, and if the project continues to develop, it will be updated."
            }
        },
        "next-project": {
            "description": "I created this project through a YouTube course, but I customized many aspects to suit my preferences.This website is built using Next.js 13 with app routing. For user authentication, I implemented Google Auth on this site. It's a full-stack app with a straightforward backend, although in most cases, I didn't memorize anything from the backend and simply rewrote the code. I also developed the adaptation of the site, and developed the design in Figma.",
            "slider": {
                "Main page": "The main page differs slightly in design from the one proposed in the video. The useContext from React was employed to implement a theme switcher (dark/light). If the user is not registered, an icon for navigating to the registration page is displayed; otherwise, if registered, an icon for accessing the personal account is shown.",
                "Portfolio": "The portfolio page contained 3 links, and if you click on one of them, the user will be redirected to a page that tells about one of the topics chosen by the user. Here, nested routing was applied: portfolio/[id].",
                "Posts": "The Posts page was a feed of posts added by users. Clicking on any of the posts triggered an embedded routing [id]. This page, along with several others that fetched data from the server, featured skeleton loading. The page displayed all the information about the post.",
                "Login page": "The login page authenticated users. Users could manually enter their data or log in through Google. If the user did not have an account before, they could register through the register page. After authentication or registration, the user was redirected to their profile.",
                "User profile": "If a registered user navigates to their profile, they will land on a page where they can view their existing posts or create a new post. Clicking the 'Create new post' button opens a modal window with a form for creating a new post. Additionally, there was a 'Logout' button, clicking on which would log the user out."
            }
        },
        "buttons": {
            "visit": "Visit the site",
            "code": "See the code"
        },
        "tools": "Tools",
        "links": "Links"
    },
    "reverseFilter": "Projects from old to new",
    "defaultFilter": "Projects from new to old",
    "footer": "created and maintained •",
    "footerTitle": "Found a bug? tell me:"
}