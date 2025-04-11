const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
const aiRoute = require("./src/services/routes/aiRoute");



const app=express()

app.use(cors())

app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/api",aiRoute)

PORT=process.env.PORT || 3000
app.listen(PORT,()=>{console.log(`app is running on ${PORT}`)})