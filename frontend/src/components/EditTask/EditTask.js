import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./EditTask.module.css"
import baseUrl from "../baseUrl";

const EditTask = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch task data for editing
  // hare i want specific task details
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(`${baseUrl}/specificTask/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setFormData({
          title: response.data.title,
          description: response.data.description,
        });
      } catch (err) {
        console.error("Error fetching specific task", err);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      console.log(token)
      const response = await axios.put(
        `${baseUrl}/tasks/${id}`,
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      navigate("/");
      console.log("Task updated successfully", response.data);
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={style.TaskContainer}>
      <h1 className={style.add}>Edit Task</h1>
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
