const express = require('express')
const {connectToMongoDb} = require("./connect.js")
const urlRoute = require("./routes/url")
const URL = require("./models/url")

const app = express()
const PORT = 8765

connectToMongoDb('mongodb://localhost:27017/short-url')
.then(()=>console.log('mongodb connected'))

app.use(express.json())

app.use("/url",urlRoute)

app.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {
        $push: {
            visitHistory : {
                timestamp : new Date(Date.now())
            }
        }
    })
    res.redirect(entry.redirectUrl)
})


app.listen(PORT,()=>{
    console.log(`Port started at ${PORT}`)
})
