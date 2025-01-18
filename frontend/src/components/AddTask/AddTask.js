import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./AddTask.module.css";
import baseUrl from "../baseUrl";

const AddTask = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      console.log(token);
      console.log("formData", formData);
      
      const response = await axios.post(
        `${baseUrl}/tasks`, 
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      navigate("/");
      console.log("Task submission successful", response.data);
    } catch (err) {
      console.error("Error submitting task", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={style.TaskContainer}>
      <h1 className={style.add}>Add Task</h1>
      <form className={style.TaskForm} onSubmit={handleSubmit}>
        <input
          className={style.inputFild}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Task Title"
          required
        />
        <textarea
          className={style.inputFild}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Task Description"
          rows="4"
          required
        />
        <button className={style.inputFild} type="submit">
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
