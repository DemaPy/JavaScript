const jwt = require("jsonwebtoken")


module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }


    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(200).json({
                message: "User not autorized."
            })
        }
        const decodeDdata = jwt.verify(token, "SECRET_KEY")
        console.log(decodeDdata)
        req.user = decodeDdata

        next()
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            message: "User not autorized."
        })
    }
}