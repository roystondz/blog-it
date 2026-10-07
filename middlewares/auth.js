const { validateToken } = require("../services/auth");  

function checkForAuthToken(tokenName){
    return (req,res, next)=>{
        let token;

        // Check if the token exists in headers
        const authHeader = req.headers['authorization'];
        if(authHeader && authHeader.startsWith('Bearer ')){
           token = authHeader.split(' ')[1];
        }

        // Check if the token exists in cookies
        if (!token) {
            token = req.cookies[tokenName];
        }

        // If the token is not found in either headers or cookies, proceed without user info
        if(!token){ return next(); }

        // Validate the token and extract user info
        const userPayload = validateToken(token);
        if(!userPayload){
            return next();
        }

        // Attach user info to the request object
        req.user = userPayload;
        next();
    }
}

module.exports = {
    checkForAuthToken,
};