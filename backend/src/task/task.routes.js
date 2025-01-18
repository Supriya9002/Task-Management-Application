import express from 'express';
import TaskController from './task.controller.js';
import jwtAuth from "./../middleware/jwt.middleware.js"

const taskRouter = express.Router();
const taskController = new TaskController();

// Routes
taskRouter.post('/tasks', jwtAuth, (req, res) => taskController.createTask(req, res));
taskRouter.get('/tasks', jwtAuth, (req, res) => taskController.getAllTasks(req, res));
taskRouter.put('/tasks/:id', jwtAuth, (req, res) => taskController.updateTask(req, res));
taskRouter.delete('/tasks/:id', jwtAuth, (req, res) => taskController.deleteTask(req, res));
taskRouter.get('/specificTask/:id', jwtAuth, (req, res) => taskController.getOneTask(req, res));

export default taskRouter;
