// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(` Server is running at prt : ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
  
})


// import expree from "express"
// const app = express()

// ;( async () =>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", () => {
//         console.log("Err: ", error);
//         throw error
//       })
//       app.listern(process.env.PORT, () =>{
//         console.log(`App is listerning on port ${process.env.PORT}`);
        
//       })
//     } catch (error) {
//         console.log("Error: ", error);
//         throw err
//     }   

// })()