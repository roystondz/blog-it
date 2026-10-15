# Blog It ✍️

Welcome to **Blog It**, a blogging platform that supports both **Server-Side Rendering (SSR)** and **REST APIs**. Users can create, share, and explore blogs while enjoying a seamless experience across web and API-based clients.

---

## Features

- **User Authentication**: Sign up, sign in, and sign out functionality with JWT-based authentication.
- **Blog Management**: Create, view, and manage blogs with cover images.
- **Comments**: Add and view comments on blogs.
- **Responsive Design**: Fully responsive UI using Bootstrap 5.
- **Secure Passwords**: Passwords are hashed using `bcryptjs`.
- **File Uploads**: Upload cover images for blogs using `multer`.
- **Dual Support**: Both SSR (EJS templates) and REST APIs are supported.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Templating Engine**: EJS
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Bootstrap 5
- **File Uploads**: Multer

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blog
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add the following environment variables:

   ```bash
   JWT_SECRET=your_jwt_secret
   MONGO_URL=mongodb://127.0.0.1:27017/blog-it
   COOKIE_NAME=token
   PORT=8000
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to
   ```bash
   http://localhost:8000
   ```

---

## Future Improvements

- Add functionality for likes and views on blogs.
- Implement pagination for blogs and comments.
- Enhance error handling for both SSR and REST APIs.
- Improve test coverage with unit and integration tests.

---

## API Endpoints

### User Routes

- **POST** `/user/signup`: Register a new user.
- **POST** `/user/signin`: Log in a user.
- **GET** `/user/signout`: Log out a user.

### Blog Routes

- **POST** `/blog/add-new-blog`: Create a new blog (requires authentication).
- **GET** `/blog/:blogId`: Get details of a specific blog.

### Comment Routes

- **POST** `/comment/:blogId`: Add a comment to a blog (requires authentication).

---

## Project Structure

```plaintext
blog/
├── config/             # Database configuration
├── controllers/        # Route controllers
├── middlewares/        # Middleware functions
├── models/             # Mongoose models
├── public/             # Static files (uploads, images, etc.)
├── routes/             # Express routes
├── services/           # Utility services (e.g., authentication)
├── views/              # EJS templates
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── [index.js](http://_vscodecontentref_/3)            # Entry point of the application
├── [package.json](http://_vscodecontentref_/4)        # Project metadata and dependencies
└── [README.md](http://_vscodecontentref_/5)           # Project documentation


---