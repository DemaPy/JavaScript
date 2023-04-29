const jwt = require("jsonwebtoken")


module.exports = function(roles) {
    return function(req, res, next) {
        if(req.method === "OPTIONS") {
            next()
        }
    
        try {
            console.log(req.headers)
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(403).json({
                    message: "User not Authorized."
                })
            }
            const {role: userRoles} = jwt.verify(token, "SECRET_KEY")
            let hasRole = false

            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            });

            if (!hasRole) {
                return res.status(403).json({message: "User not Admin."})
            }

            next()
        } catch (error) {
            console.log(error)
            return res.status(403).json({
                message: "User not autorized."
            })
        }
    }
}