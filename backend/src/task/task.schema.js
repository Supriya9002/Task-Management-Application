import mongoose from 'mongoose';

// task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    minlength: [3, "Task title should be at least 3 characters long"],
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;
