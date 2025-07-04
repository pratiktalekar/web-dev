const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.status(200).send(`you have ${kidneyLength} kidneys`)
})

app.use((err, req, res, next) => {
    res.json({
        msg : "something went wrong with our server"
    })
})

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})