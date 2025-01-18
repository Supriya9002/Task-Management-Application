import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css'; 
import { useNavigate } from 'react-router-dom';
import baseUrl from '../baseUrl';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(`${baseUrl}/tasks`, {
        headers:{
          Authorization: `${token}`, 
        }
      });
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit task with id:", id);
    navigate(`/tasks/${id}`)
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`${baseUrl}/tasks/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setTasks(tasks.filter(task => task._id !== id));
      console.log("Task deleted successfully");
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.homePageTitle}>Tasks</h1>
      {tasks.map((task) => (
        <div key={task._id} className={styles.taskCard}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className={styles.actionButtons}>
            <button
              onClick={() => handleEdit(task._id)}
              className={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
