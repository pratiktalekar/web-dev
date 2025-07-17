const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.get("/sum", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.send(parseInt(a) + parseInt(b))
})


app.listen(PORT, () =>{
    console.log(`app is running at ${PORT}`)
})