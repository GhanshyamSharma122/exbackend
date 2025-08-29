import express from "express"
import { subjectDetails } from "./sample.data.js"
import cors from "cors"

const app=express()
app.use(cors({
    origin:'*',
    credentials:true
}))
app.get("/",(req,res)=>{
    return res
    .status(200)
    .json(subjectDetails)
})
app.listen(8080,()=>{
    console.log("it is running")
})