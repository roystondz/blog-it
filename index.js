require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');
const commentRoutes = require('./routes/comment');
const ssrRoutes = require('./routes/ssr'); 
const authMiddleware = require('./middlewares/auth');
const blog = require('./models/blog');

const app = express();

// Establish database connection
connectDB();

// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));
app.use(authMiddleware.checkForAuthToken(process.env.COOKIE_NAME));


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Set up routes
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use('/comment', commentRoutes);

// SSR routes
app.use('/', ssrRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});