const { validateToken } = require("../services/auth");  

function checkForAuthToken(token){
    return (req,res, next)=>{
        const cookieToken = req.cookies[token];
        if(!cookieToken){ return next(); }

        const userPayload = validateToken(cookieToken);
        if(!userPayload){
            return next();
        }
        req.user = userPayload;
        next();
    }
}

module.exports = {
    checkForAuthToken,
};