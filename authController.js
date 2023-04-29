const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")


function generateAccessToken(id, role) {
    const payload = {
        id, role
    }

    return jwt.sign(payload, "SECRET_KEY", {
        expiresIn: "24h"
    })
}

class AuthController {
    async registraion(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                console.log(errors)
                return res.status(400).json({message: "Registration error.", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json("User with this username already exist.")
            }

            const hashPassword = bcrypt.hashSync(password, 6)
            const roles = await Role.findOne({value: "admin"})

            const user = new User({
                username,
                password: hashPassword,
                roles: [roles.value]
            })

            await user.save()

            return res.status(200).json({message: "User has been succesfully registered."})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Registration Error: "+ error})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) res.status(400).json({message: `User ${user} not found.`})
            const validPassword = bcrypt.compareSync(password, user.password)

            if (!validPassword) res.status(400).json({message: `Incorrect ${password} or ${username}.`})


            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Login Error: "+ error})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json({users})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Get Users Error: "+ error})
        }
    }
        
}

module.exports = new AuthController()