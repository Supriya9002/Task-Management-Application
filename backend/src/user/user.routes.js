import express from "express"
import UserController from "./user.controller.js";


//Express router
const userRouter = express.Router();

const userController =new UserController();

// routes
userRouter.post("/register", (req,res)=> userController.register(req,res));
userRouter.post("/login", (req,res) => userController.login(req,res));



export default userRouter;