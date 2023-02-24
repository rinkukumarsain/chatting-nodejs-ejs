const jwt = require("jsonwebtoken")
exports.isAuth = (req, res, next)=> {
    try {
        const hearder = req.headers.authorization;
        if (hearder) {
            const token = req.headers.authorization.split(" ").pop();
            const verified = jwt.verify(token, process.env.SECRT_KEY);
            if (verified) {
                next()
            } else {
                return res.json("invalid token !! ");
            };
        }
        else{
            return res.json("token is not here please provide valid token !! ");
        };
    } catch (error) {
        return res.status(401).json(error);
    };
};