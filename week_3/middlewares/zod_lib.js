const express = require("express")
const zod = require("zod")
const { email } = require("zod/v4")
const app = express()
const PORT = 3000

const schema = zod.array(zod.number())

const schema2 = zod.object({
    email : zod.email(),
    country : zod.string()
})

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    
    const kidneys = req.body.kidney;
    const response = schema.safeParse(kidneys)
    
    if (response.success) {
        res.send({
            success: true,
            data: response.data
        })
    } else {
        res.status(400).send({
            success: false,
            error: response.error.issues
        })
    }
})

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`)
})