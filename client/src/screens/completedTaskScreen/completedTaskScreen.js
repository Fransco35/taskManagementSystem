import styles from "./completedTaskScreen.module.css";
import TaskItemTwo from "../../components/Tasks/TaskItemTwo";
import { useState, useEffect } from "react";

const CompletedTaskScreen = () => {
  const [content, setContent] = useState([]);
  const [isContent, setIsContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("/api/completedTasks")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.length > 0) {
          setContent(data);
          setIsContent(true);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleDelete = async (taskId) => {
    const id = taskId
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
    <div className={styles.taskScreen}>
      <div className={styles.taskScreenHeading}>
        <h1> Here is a list of your completed tasks</h1>
      </div>
      <div className={styles.taskScreenContent}>
        {!isContent && !isLoading && <h3> You have no completed tasks</h3>}
        {isContent && content.map((data) => (
          <TaskItemTwo
            key={data._id}
            title={data.title}
            description={data.description}
            onClick={() => handleDelete(data._id)}
            button="Delete"
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskScreen;
