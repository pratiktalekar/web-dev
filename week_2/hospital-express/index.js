const express = require('express');
const app = express();
const PORT = 3000;

const users = [{
    name : "john",
    kidneys : [{
        healthy : false
    }]
}]

app.get("/", (req, res) => {
    const john_kidneys = users[0].kidneys;
    const numberOfKidneys = john_kidneys.length;
    numberOfHealthyKidneys = john_kidneys.filter( kidney => kidney.healthy )
    numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.listen(PORT, () => {
    console.log(`listening at  http://localhost:${PORT}`)
})