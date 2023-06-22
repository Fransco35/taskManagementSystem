import Card from "../../components/Card/Card";
import styles from "./addTaskScreen.module.css";
import { useRef } from "react";

const AddTaskScreen = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredData = {
      title: enteredTitle,
      description: enteredDescription
    }

    const sendData = async () => {
      try {
        const response = await fetch("/api/addTasks", {
          method: "POST",
          body: JSON.stringify(enteredData),
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (response.status === 201) {
          alert("Successfully created");
          titleRef.current.value  = ''
          descriptionRef.current.value = ''
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendData();
  };

  return (
    <Card style={{ width: "50%", margin: "30px auto 0" }}>
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          className={styles.taskInput}
          type="text"
          placeholder="What is your task title ?"
          ref={titleRef}
        />
        <input
          className={styles.taskInput}
          type="text"
          placeholder="Description......"
          ref={descriptionRef}
        />
        <button className={styles.button}> Add Task</button>
      </form>
    </Card>
  );
};

export default AddTaskScreen;
