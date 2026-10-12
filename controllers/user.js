const User = require('../models/user');
const { generateToken } = require('../services/auth');
const UserError = require('../errors/userError');


async function userSignUp(req, res) {
    const { fullName, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render("signup",{ error: UserError.EMAIL_ALREADY_EXISTS });
        }

        const newUser = await User.create({ fullName, email, password });
        const token = generateToken(newUser);
        res.header('Authorization', `Bearer ${token}`);
        res.cookie('token', token);
        if (req.headers.accept && req.headers.accept.includes('application/json')) {
            return res.status(201).json({ message: 'User created successfully', token });
        }
        return res.redirect('/');

    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

async function userSignIn(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user){
            return res.render('signup',{ error: UserError.USER_NOT_FOUND });
        }
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.render('signin',{ error: UserError.INVALID_PASSWORD });
        } else {
            const token = generateToken(user);
            res.header('Authorization', `Bearer ${token}`);
            res.cookie('token', token);
            if (req.headers.accept && req.headers.accept.includes('application/json')) {
                return res.status(200).json({ message: 'Sign-in successful', token });
            }
            return res.redirect('/');
        }
    }catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

async function userSignOut(req, res) {
    res.clearCookie('token');
    res.header('Authorization', '');
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
        return res.status(200).json({ message: 'Sign-out successful' });
    }
    return res.redirect('/');
}

module.exports = {
    userSignUp,
    userSignIn,
    userSignOut
}