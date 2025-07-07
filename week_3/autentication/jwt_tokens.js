const express = require("express");
const jwt = require("jsonwebtoken");
const app = express()

const jwtPass = '123456';
const PORT = 3000;

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

function userExists(email, password) {
    n = users.length
    let ans = false
    for (let i=0; i<n ; i++) {
        if (users[i].email == email && users[i].password == password) {
            ans = true
        }
    }
    return ans
}

app.use(express.json())

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!userExists(email, password)) {
        res.status(403).json({
            msg : "data is invalid"
        })
    }

    var token = jwt.sign({email : email}, jwtPass);
    res.json({
        token,
    })
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPass);
    const email = decoded.email;
    res.json({
        users : users
    })
})



app.listen(3000, () => {
    console.log(`app is listening at ${PORT}`)
})