const Router = require("express")
const controller = require("./authController")
const router = new Router()
const {check} = require("express-validator")
const authMiddleware = require("./middleware")
const rolemiddleware = require("./rolemiddleware")

router.get("/users", rolemiddleware(["admin"]), controller.getUsers)
router.post("/login", controller.login)
router.post("/registration", [
    check('username', "Name of user cannot be empty.").notEmpty(),
    check('password', "Password should be min 4 symbols max 10 symbols.").isLength({min: 4, max: 10}),
], controller.registraion)


module.exports = router