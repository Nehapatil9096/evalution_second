import path from "path"; // Add this line for importing the 'path' module
import express from "express";
import dotenv from"dotenv";//import .env package and file
import cors from "cors"; // Add this line

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();//create experss server
const PORT = process.env.PORT || 8000; //import port from .env file
const __dirname=path.resolve();
dotenv.config();
app.use(cors());


app.use(express.json());//to parse incoming requests from req.body

app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
//home route or root route
//app.get("/", (req,res) =>{
    //root route http://localhost:3000/
   // res.send("hello world");
//});



app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});