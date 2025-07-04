const express = require("express");
const app = express();
const PORT = 3000;

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "pratik" || password != "pass"){
        res.status(403).json({
            msg : "something up with your login credentials"
        })
    }
    next()
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
            res.status(403).json({
                msg : "something up with your inputs"
            })
    }
    next() 
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.status(200).json({
        msg : "your health is fine"
    })
})

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})