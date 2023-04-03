# Book Search Engine
Book Search Engine is a fully functioning Google Books API search engine that was built with a RESTful API and was then refactored to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 

## Description
This application allows the user to search for new books to read and keep a list of books to purchase.  It has the following features:

* When the user loads the search engine, they are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
* When the user clicks on the Search for Books menu option, they are presented with an input field to search for books and a submit button
* When the user is not logged in and enter a search term in the input field and click the submit button, they presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
* When the user clicks on the Login/Signup menu option, a modal appears on the screen with a toggle between the option to log in or sign up
* When the toggle is set to Signup, the user is presented with three inputs for a username, an email address, and a password, and a signup button
* When the toggle is set to Login, theuser is presented with two inputs for an email address and a password and login button
* When the user enters a valid email address and create a password and click on the signup button, the user account is created and the user is logged in to the site
* When the user enters their account’s email address and password and click on the login button, the modal closes and they are logged in to the site
* When the user is logged in to the site, the menu options change to Search for Books, an option to see their saved books, and Logout
* When the user is logged in and enter a search term in the input field and click the submit button, they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
* When the user clicks on the Save button on a book, that book’s information is saved to their account
* When the user clicks on the option to see their saved book, they are presented with all of the books they have saved to their account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from their account
* When the user clicks on the Remove button on a book, that book is deleted from their saved books list
When the user clicks on the Logout button, they are logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Technology Used

* Uses the [Mongoose packages](https://www.npmjs.com/package/mongoose) 
* Uses the [Express package](https://www.npmjs.com/package/express) 
* Uses the [React package](https://www.npmjs.com/package/react)
* Uses the [GraphQL package](https://www.npmjs.com/package/graphql)

## Installation

  To install necessary dependencies, run the following command:
  ```
  npm i
  ```
  To run on local machine:
  ```
  npm run develop
  ```
  

## Mock-Up

The following animation demonstrates the application functionality on app installed on Heroku:

[Demonstration of Search Engine](./Assets/demo-text-editor.mp4) or [demo on google Drive](https://drive.google.com/file/d/1ErImjJbkGNJrCv_g3YOi0S4E67qHicIE/view?usp=share_link)

[Screenshot of Search page](./assets/Search.PNG)

[Screenshot of Saved Books page](./assets/Saved.PNG)

## Usage
1. You can access the file in GitHub repository: https://github.com/Book-Search-Engine
2. The application is deployed on Heroku and can be accessed using the URL: https://still-lowlands-02342.herokuapp.com/
2. Run the application in the terminal using this command: 
```
npm run develop
``` 

## License
None

## Contributing

Contact owner

## Questions

If you have any questions about the repository and project, or would like to open an issue or would like to contact me for contributing or any other subject, you can do so at rima.bhumbla@gmail.com. You can welcome to see more of my work at https://github.com/rbhumbla1.

