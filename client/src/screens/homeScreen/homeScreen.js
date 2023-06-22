import styles from "./homeScreen.module.css";
import TaskItem from "../../components/Tasks/TaskItem";
const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenHeading}>
        <h1> Welcome to your task manager</h1>
      </div>
      <div className={styles.homeScreenContent}>
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
        <TaskItem
          title="Welcome"
          description="Welcome to your task manager"
          buttonOne="Completed"
          buttonTwo="Delete"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
