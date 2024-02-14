import express from "express";
import dotenv from"dotenv";//import .env package and file

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();//create experss server
const PORT = process.env.PORT || 8000; //import port from .env file

dotenv.config();

app.use(express.json());//to parse incoming requests from req.body

app.use("/api/auth", authRoutes);


//home route or root route
//app.get("/", (req,res) =>{
    //root route http://localhost:3000/
   // res.send("hello world");
//});



app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});