const express=require("express")
const router=express.Router()
const getMotiationalQuote=require("../controllers/aiController")

router.get("/quote",getMotiationalQuote);

module.exports=router;