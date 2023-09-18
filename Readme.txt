# Passport Authentication App

This is a Passport.js-based authentication application that allows users to sign up, log in, and access a welcome page. It is built using a stack that includes HTML, CSS, JavaScript, Node.js, MongoDB, Express.js, Passport.js for authentication, Bcrypt for password hashing, and EJS for rendering views.

## Features

- **User Authentication**: Users can sign up, log in, and securely access their accounts.
- **Session Management**: Passport.js and express-session are used to manage user sessions.
- **Password Hashing**: User passwords are securely hashed using Bcrypt.
- **Views**: The application uses EJS templates to render dynamic views.
- **User-Friendly Interface**: A clean and user-friendly interface for a seamless experience.

## Prerequisites

Before running the application, ensure you have the following:

- Node.js installed on your system.
- MongoDB installed and running locally or a connection URI for a MongoDB database.
- Basic knowledge of JavaScript and Node.js.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:itxTouseef74/Passport-Application-Node-Express-Mongo-.git
   ```

2. Navigate to the project directory:

   ```bash
   cd passport-auth-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the project root and add the following environment variables:

   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_uri
   SESSION_SECRET=your_session_secret
   ```

2. Replace `your_mongodb_connection_uri` and `your_session_secret` with your MongoDB connection URI and a secret key for session management.

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to access the application.

3. Sign up for a new account or log in if you already have one.

4. After successful authentication, you will be redirected to the welcome page.

## Customization

You can customize the application's behavior and appearance by modifying the code and styles in the `public` and `views` directories.

## Dependencies Used

- Node.js
- Express.js
- MongoDB
- Passport.js
- Bcrypt
- EJS

## Contributions

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request explaining your changes.

## Acknowledgments

- This project was developed to demonstrate user authentication using Passport.js and a stack of technologies including Node.js, MongoDB, Express.js, and EJS templates.
