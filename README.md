# Project: Recommend.me 1.0

#### Video Demo:  <URL https://youtu.be/W4qiMhjP8Qw>

#### Description:
This is the final project I made for Harvard edx's CS50 Introduction to Computer Science course. For my final project I made a webpage to recommmend tv shows based off the different categories such as top rated, popular shows and currently airing. It also has the function of recommending similar shows to a title and giving top recommendations for a show based off their genres. Besides that it can also search a shows and gives its details by querying the title of the show and also suggesting a random show to watch. This webpage was made using HTML, CSS, Javascript and React with the help of The Movie Database (TMDB) API.

To start the webpage go to the project directory in the terminal. Use the 'npm install' prompt to rebuild the local modules and the 'npm start' prompt to boot up the webpage using the React App. On startup the project redirects the user to the homepage. The homepage consists of the header, the categories for 'Top Rated', 'Popular' and 'Currently Airing' series and the footer. It also has four button which redirects to four different pages with their respective functions; 'Search by Title', 'Recommend Similar Shows', 'Recommend by Genre' and 'I'm Feeling Lucky' a randomize button. To clear the local modules from the project folder the 'rm -rf node_modules' can be used.

When clicked on the posters on the show tha page redirects the user to the details of the show with the poster, title, genre, score, where to watch and other infos on display. When the genre of the show is clicked the page redirects the user to the top show recommendations for the particular genres. To avoid overloading and slowing down the process the number of recommendations given are 100 shows, where the posters of those shows are displayed and would redirect the user to its detail page upon click. The 'see more' button under each category on the homepage redirects the user to a list of 10 pages for the categories with 20 shows on each page. The title 'Recommend.me' on the header redirects the user back to the homepage upon click. The links on the footer of the page redirects the user to TMDB's website with details of the API.

The 'Search by Title' button redirects the user to a page with a search bar which has an autocomplete function and queries the API for the show title. On click user will be redirected to its detail page. The 'Recommend Similar' button redirects the user to a page with a similar search bar but instead the user will be redirected to a 'Similar Shows for this Title' page where the poster for 100 shows are listed for the particular title. The 'Recommend By Genre' button redirects the user to a page with a list of buttons for each genre. On click it redirects the user to the top show recommendations for the particular genres with a list of 100 show posters. The 'I'm Feeling Lucky' button redirects the user to a random show detail page.

#### Code:

The codes written for this project are 'App.js', 'APIKey.js', the 'components' folder and the 'pages' folder under the 'src' folder. All the other files in the project folder are system files created by the React App. App.js contains the function 'App' which routes all the pages on the website together using the functions BrowserRouter and Routes from react-router-dom. All the pages are imported into 'App' and their paths declared. APIKey.js contains the class APIKey where the API keys for the different functions from TMDB are inserted using axios.get. Axios is a promise based HTTP client and makes it easier to send asynchronous HTTP requests from the browser and handle the transformation of request and response data. The names for each API links are declared to be used on the diffrent pages of the website.

The 'components' folder consists of the files 'Header.js' and 'Footer.js'. Header.js contains the Header function to be used across all pages on the website. The header is designed to make the website look easy on the eyes and not plain. For this purpose I took the liberty of adding on a pixel art gif as a background to make it more interactive. A nice font with simple color is used for the title and a tagline is added beneath to make it look less empty. The title has a useNavigate function from react-router-dom which redirects the user to the homepage upon click. Footer.js contains the Footer function which is a short description of the website and links to the TMDB API details, the API terms of use and its privacy policy.

The 'pages' folder contains the all the pages for the website. The latest, top rated and popular functions consists of 10 pages which are encompassed in their respective folders. Besides that there are the 'Homepage.js', 'Details.js', 'Genres.js', 'ImFeelingLucky.js', 'RecommendTitle.js', RecommendGenre.js', RecommendSimilar.js' and 'Similar.js' files. The stylizations and design for the pages are all incorporated in the 'styles.css' file. All the pages are designed using css to make sure they are responsive and change with the width and different sizes of devices. The website is also designed with a 'dark mode' type setting to make it easier on the eyes and not too bright. For the website I choose a black/purple/pink colour palette to make it look colourful and striking but not too chaotic. Some other options for the colour palette were blue or red but I decided to not make the website in these colours as they are already used in most mainstream medias and websites, hence making it look less unique.

Homepage.js contains the Homepage function. Under the header in the homepage a button group for four interactive buttons are designed, 'Search by Title', 'Recommend Similar Shows', 'Recommend by Genre' and 'I'm Feeling Lucky' which redirects user to the respective pages with the useNavigate function. Below the buttons sections for the top rated, popular and latest shows are made. For these sections arrays for the top rated, popular and latest shows with useState. Endpoints from the API are then imported and incorporated into the arrays using useEffect. To make the webpage look more enticing the poster paths from the endpoints are taken as the show displays instead of alternatively using their titles. The poster paths for each functions are mapped and displayed in a responsive and interactive manner, which redirects user to its detail page upon click using useNavigate. Under each sections there are 'See more >>' buttons which interactively redirects user to the more detailed page set of each sections using anchor.

The latest, top rated and popular functions all work in a similar manner. The API link for each page of the API only consists of 20 results to avoid overloading. Therefore, for these functions I have designed the pages to load each specific page of the functions in the API for a total of 10 pages to ensure that enough recommendations are given to the user. The pages function in a similar way to their parent functions on the hompage, whereby useState and useEffect are utilized to incorporate the endpoints of the API into the website. The poster paths are also displayed in a similar manner which redirects user to their detail page using useNavigate. Below the show posters the page number list is displayed, which uses anchor to redirect user to each of the function page.

Details.js contains the Detail function. The id for the shows from the API endpoints are inputted into the details page through the useParams function from react-router-dom. useParams is a hook which retrieves route parameters from the component rendered by the matching route. These ids are used to retrieve the show details called by the API using useState and useEffect. On this page the show endpoints such as the title, score, genres, where to watch etc. are displayed in a table. The show score is displayed as a nice percentage using Math.round to make it look more clean. The genres of the shows are mapped from the show endpoints and are allowed to interactively connect the user to the Recommend by Genre page. The icons of streaming sites are displayed under where to watch instead of just their names to make the page look more iconic and all-rounded. A 'Return to Homepage' button is also added under the show poster for an easier alternative to navigate.

RecommendTitle.js contains the RecommendTitle function. This webpage contains only a search bar which was incorporated using the ReactSearchAutocomplete function. The search bar takes the input in the search bar as a string and gives out a list of items in an array using the handleonSearch function. The API is queried and the results mapped in accordance to the input to give autocomplete suggestions to the user. On click the title would redirect user to its details page.

RecommendSimilar.js contains the RecommendSimilar function which works in a similar way to the RecommendTitle function but instead of directing the user to its details page it would redirect the user to the 'Similar Shows for This Title' page instead. This page could be found under the Similar function in Similar.js. The id for the shows from the search bar are brought into the Similar function through useParams. Under this function 5 pages of the similar shows endpoints are loaded through useState and useEffect with help of the id received. Each page contains 20 shows which then totals to an amount of 100 shows for the suggestions. The poster paths for these shwos are mapped on top of each other on the webpage to exhibit a clean and abundant display of 100 show suggestions for the user to choose from.

RecommendGenre.js contains the RecommendGenre function. Under this function the genre endpoints from the API are called and set as an array through useEffect. Under the API a list of 19 genres is set out, which is then divided into five sections using the slice function. These sections are mapped as button groups on the page. The usage of button groups makes the webpage better designed for responsiveness and makes it easier for the design to be laid out using css. On click the genre buttons redirects user to the 'Top Recommendations for this Genre' page which could be found under the Genres function in Genres.js. The Genres function works in a similar way to the Similar function, which uses useParams to input the genre id into the function. The shows which contains this genre are displayed similarly using 5 pages of the API endpoints, whereby they are sorted by popularity. Therefore only the top 100 most popular shows for each genres are recommended for the user. Popularity was chosen as the sorting factor instead of other parameters like alphabetical order or latest releases to ensure that the recommendations would be what users are more prone to enjoy and not just random choices. This design choice allows the user to get the best recommendations in the limited but adequate number of choices.

ImFeelingLucky.js contains the ImFeelingLucky function which works in a similar fashion to Details. To make it output a random show, id is therefore generated by outputting a random number instead of using useParams to retrieve the show details. For the random number generation the functions Math.floor and Math.random are used to generate a number between 1 to 135999. Further into the list the shows are more scarcely detailed and incomplete, therefore an arbitrarily large number like 135999 is chosen as the maximum cap. The show details are then called in accordance to this id through useState and useEffect.

Some other improvements and design choices I would like to make are for example to add on a light mode button to change the user interface to meet the preference of a portion of users. This could be incorporated with AddEventListener in Javascript and CSS settings to match the change in interface. Besides that I also debated making a multi-select choice page which is complexer and harder to incorporate into the API. I also debated on displaying the different functions with an endless amount of pages as the content of the API. This could be done using the ReactPagination or Pagination functions, which are ultimately more complex and takes a greater toll on time and memory. Therefore these design choices are not incorporated into the first webpage design due to lack of knowledge or time constraints. These design choices would therefore be debated for further development of the webpage.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
