const express = require("express");
const jwt = require("jsonwebtoken");
const app = express()

const jwtPass = '123456';
const PORT = 3000;

app.use(express.json())

const users = [
    {
        email : "pratik@gmail.com",
        password : "pratik"
    },
    {
        email : "yash@gmail.com",
        password : "yash"
    },
    {
        email : "austin@gmail.com",
        password : "austin"
    }
]

app.post("/signup", (req, res) => {
    const username = req.headers.username
    const password = req.headers.password

    if (!userExists(username)) {
        res.json({msg : "user already exists"})
    }
    const token = jwt.sign({username}, jwtPass)
    res.status(200).json({token : token})
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    
})


app.listen(3000, () => {
    console.log(`app is listening at ${PORT}`)
})