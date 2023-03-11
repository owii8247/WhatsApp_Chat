
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

export const connection = async () => {
    const MONGOURL = `mongodb://${username}:${password}@ac-yosbdjj-shard-00-00.o1q6zqy.mongodb.net:27017,ac-yosbdjj-shard-00-01.o1q6zqy.mongodb.net:27017,ac-yosbdjj-shard-00-02.o1q6zqy.mongodb.net:27017/?ssl=true&replicaSet=atlas-5xurxs-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(MONGOURL, {useUnifiedTopology : true})
        console.log(`DB Connected Successfully`)
    }
    catch (err) {
        console.log(`DB Connection Failed`,err.message)
    }
}