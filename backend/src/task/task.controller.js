import TaskModel from "./task.schema.js";

// Task Controller
export default class TaskController {
    // Create Task
    async createTask(req, res) {
        try {
            console.log(req.body)
            const { title, description } = req.body;
            const newTask = new TaskModel({title,description,user: req.userID,});
            console.log("newTask", newTask)
            await newTask.save();
            res.status(201).json(newTask);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Failed to create task", error: err });
        }
    }
    // Fetch All Tasks for Logged-in User
    async getAllTasks(req, res) {
        try {
            const tasks = await TaskModel.find({ user: req.userID });
            //console.log("All Task", tasks);
            res.status(200).json(tasks);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Failed to fetch tasks", error: err });
        }
    }
    // Update Task
    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            // console.log(id, title, description);
            const task = await TaskModel.findOne({ _id: id, user: req.userID });
            if(!task){
                res.status(404).json({ message: "Task not found" });
            }
            // Update task
            task.title = title || task.title;
            task.description = description || task.description;
            //console.log(task)
            // Save the updated task
            const updatedTask = await task.save();
            res.status(200).json(updatedTask);
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Failed to update task", error: err });
            }
        }
        // Delete Task
        async deleteTask(req, res) {
            try {
                const { id } = req.params;
                // console.log(id)
                const deletedTask = await TaskModel.findOneAndDelete({_id: id,user: req.userID,});
                if (!deletedTask) {
                    return res.status(404).json({ message: "Task not found" });
                }
                res.status(200).json({ message: "Task deleted successfully"});
            } catch (err) {
                console.log(err);
                res.status(500).json({ message: "Failed to delete task", error: err });
            }
        }
  
        //get specific task
        async getOneTask(req, res){
            try{
                const { id } = req.params;
                const oneTask = await TaskModel.findById({_id: id, user: req.userID})
                if(!oneTask){
                    return res.status(404).json({ message: "Task not found" });
                }
                res.status(200).json(oneTask);
            }catch(err){
                console.log(err);
                res.status(500).json({ message: "Failed to specific task", error: err });
            }
        }
}
