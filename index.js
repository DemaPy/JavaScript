const express = require("express")
const authRouter = require("./authRouter")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json())

app.use('/auth', authRouter)




const startServer = () => {
    try {
        mongoose.connect("mongodb+srv://admin:qwerty123@cluster0.a81tkm4.mongodb.net/?retryWrites=true&w=majority")
        app.listen(PORT, () => {
            console.log("Server started at port:", PORT)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()
