Book Life - React Project

Description

Book Life is a React project that allows users to manage their book collection. Users can add, view, and edit books, as well as like their favorite reads.

Installation

Make sure you have Node.js installed on your machine.

Clone the project repository:

git clone https://github.com/Shenay88/Book-Life---React-Project.git

cd Book-Life---React-Project

npm install

Usage

Development Server

To run the development server, use the following command:

npm run dev

This will start the development server at http://localhost:5173/.

Endpoints

Home: /

Catalog: /catalog

Login: /login

Register: /register

Logout: /logout

Add Book: /addBook

Book Details: /books/details/:bookId

Edit Book: /books/edit/:bookId

API Endpoints

User Operations: /users

Login, Register, Logout

Book Operations: /data/books

Add Book, Book Details, Edit Book

Likes: /data/likes

Likes functionality

User Permissions

Users who are not logged in cannot perform delete, edit, and like operations.

Dependencies

React: ^18.2.0

React DOM: ^18.2.0

React Router DOM: ^6.19.0

Contributing

If you'd like to contribute, please fork the repository and create a pull request. Issues and feature requests are welcome!

License

This project is licensed under the MIT License.