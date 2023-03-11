import express from "express"
import {connection} from "./config/db.js"


const app = express()
const PORT =8500

connection()

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})