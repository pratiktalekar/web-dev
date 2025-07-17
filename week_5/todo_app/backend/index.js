const express = require("express");
const {createTodo} = require("./types")
const {todo} = require("/db.js")
const app = express();
const PORT = 3000;

app.use(express.json())

app.post("/todo",async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg : "send invalid data"
        })
        return;
    }

   await todo.create({
        title : parsedPayload.title,
        description : parsedPayload.description,
        completed : false
    })

    res.json({
        msg : "todo created"
    })
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

})

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})