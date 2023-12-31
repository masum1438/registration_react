# registration_react
# Q-1:My React Project Features

This Markdown document describes the features of a React project that includes components for managing bookmarks, tracking total time, and handling prices.

## Feature 1: Bookmark Management

- **Description**: This project allows users to manage their bookmarks for articles, blogs, or any other web content.
- **Implementation**: It utilizes the `Bookmark` component to display and organize bookmarks. Users can add new bookmarks using the `handleBookmark` function.
- **Usage**: Users can click on a "Bookmark" button in the `Blogs` component to add an article to their bookmarks.

## Feature 2: Total Time Tracking

- **Description**: The project keeps track of the total time spent reading articles.
- **Implementation**: It utilizes the `totalTime` state variable to accumulate the time spent on each article, which is updated through the `handleTime` function.
- **Usage**: Users can see the total time spent in the `Bookmark` component.

## Feature 3: Price Monitoring with Warning

- **Description**: The project monitors the price of articles and displays a warning if the price exceeds $20.
- **Implementation**: It uses the `handlePrice` function to track and update the total price (`totalTaka`). When the price exceeds $20, it sets the `showWarning` state to `true`.
- **Usage**: If a blog or article costs more than $20, a warning message is displayed in the app.

These are three key features of the React project, allowing users to manage bookmarks, track total reading time, and receive warnings for high-priced articles.

## Q-2.Here's a description of how i've built the provided React code:
Import Dependencies and Components:

You start by importing necessary dependencies and components. In this code, you import the Header, Blogs, and Bookmark components, as well as the useState hook from React. You also import the App.css file for styling.
State Initialization:

You use the useState hook to initialize three state variables:
totalTime: This state variable is used to track the total time spent on reading articles.
bookmarks: It's an array state variable to manage a list of bookmarks.
totalTaka: This state variable is used to track the total cost or price of articles.
Event Handlers:

You define three functions to handle different actions:
handleBookmark(blog): This function is used to add a blog or article to the list of bookmarks. It creates a new array containing the current bookmarks and the new blog, then updates the bookmarks state with the new array.
handleTime(time): This function is responsible for updating the totalTime state by adding the time spent on reading an article to the current total time.
handlePrice(price): This function is used to update the totalTaka state by adding the price of an article to the current total price. There are no checks for price limits in this code.
Component Structure:

Your main App component is structured within a <div> with a light gray background.
Inside the <div>, you include the Header component at the top of the page.
The main content is organized into a grid with two columns. The left column spans four grid cells and contains the Blogs component. You pass the handleBookmark, handleTime, and handlePrice functions as props to Blogs.
The right column spans two grid cells and contains the Bookmark component. You pass the bookmarks, totalTime, and totalTaka state variables as props to Bookmark.
Conditional Rendering for Warning:

There is no conditional rendering for the warning in this code. In order to show a warning when the price exceeds a certain limit (e.g., $20), you can add a conditional check and rendering logic. Currently, the handlePrice function simply adds the price to the totalTaka state without any validation.
Styling:

The styling for this application is defined in the App.css file, which you have imported.
Return Statement:

The App component returns the JSX structure that defines the layout and placement of the Header, Blogs, and Bookmark components within the grid.
