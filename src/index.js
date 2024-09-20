import mongoose from "mongoose";
import {DB_NAME} from "./constants"
import expree from "express"
const app = express()

;( async () =>{
    try {
      await mongoose.connect(${process.env.MONGODB_URI}/${DB_NAME});
    } catch (error) {
        console.log("Error: ", error);
        throw err
    }   

})()