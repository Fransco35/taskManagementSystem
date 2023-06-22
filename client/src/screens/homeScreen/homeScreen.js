import styles from "./homeScreen.module.css";
import { useState, useEffect } from "react";

import TaskItem from "../../components/Tasks/TaskItem";
const HomeScreen = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          setContent(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleConfirm = async (taskId) => {
    const id = taskId;
    try {
      const response = await fetch(`/api/task/${id}`, {
        method: "PATCH",
      });

      if (isComplete) {
        alert("Already completed");
        return;
      }

      if (response.status === 201) {
        alert("Successfully updated");
        setIsComplete(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (taskId) => {
    const id = taskId;
    try {
      const response = await fetch(`/api/task/${id}`, {
        method: "DELETE",
      });

      if (response.status === 201) {
        alert("Successfully deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenHeading}>
        <h1> Welcome to your task manager</h1>
      </div>
      <div className={styles.homeScreenContent}>
        {isLoading && <h3>Loading...</h3>}
        {content.map((data) => (
          <TaskItem
            key={data._id}
            title={data.title}
            description={data.description}
            onClickOne={() => handleConfirm(data._id)}
            buttonOne={data.status}
            buttonTwo="Delete"
            onClickTwo={() => handleDelete(data._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
