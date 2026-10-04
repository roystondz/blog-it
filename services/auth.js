const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET ; // Replace in production with a secure key and store it in environment variables

function generateToken(user){
    const payload = {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
        role: user.role
    }

    const token = jwt.sign(payload, secretKey);
    return token;
}

function validateToken(token){
    try{
        const userPayload = jwt.verify(token, secretKey);
        return userPayload;
    }catch(err){
        return null;
    }
}

module.exports = {
    generateToken,
    validateToken
}