const express = require("express");
const app = express();
const PORT = 3000;

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if ( username != "pratik" || password != "pass") {
        res.status(403).json({
            msg : "something up with your login credentials"
        })
    } 
    
    if (kidneyId != 1 && kidneyId != 2) {
            res.status(403).json({
                msg : "something up with your inputs"
            })
    } 
        
    else {
        res.status(200).json( {
            msg : "your kidney is fine"
        })
    }
})

app.listen(PORT, () => {
    console.log(`app listening as ${PORT}`)
})