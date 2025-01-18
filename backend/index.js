import "./env.js"
import express from "express"
import connectUsingMongoose from "./src/config/connectUsingMongoose.js"
import userRouter from "./src/user/user.routes.js"
import taskRouter from "./src/task/task.routes.js"
import bodyParser from "body-parser"
import cors from "cors"

// app
const app = express();

// All Middleware
app.use(bodyParser.json());
app.use(cors());

// for all requested Related App
app.use("/", userRouter);
app.use("/", taskRouter);

// Main Api
app.get("/", (req, res)=>{
    res.send("Welcome To Task Management Application");
})
// console.log("process.env.Port",process.env.Port)
// Port
app.listen(process.env.Port || 2000, ()=>{
    connectUsingMongoose();
    console.log(`app Listen is port ${process.env.Port}`);
})