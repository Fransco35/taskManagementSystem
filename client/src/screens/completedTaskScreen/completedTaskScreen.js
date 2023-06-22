import styles from "./completedTaskScreen.module.css";
import TaskItemTwo from "../../components/Tasks/TaskItemTwo";

const CompletedTaskScreen = () => {



    return (
    <div className={styles.taskScreen}>
      <div className={styles.taskScreenHeading}>
        <h1> Here is a list of your completed tasks</h1>
      </div>
      <div className={styles.taskScreenContent}>
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          button="Delete"
        />
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          button="Delete"
        />
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          button="Delete"
        />
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          button="Delete"
        />
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          button="Delete"
        />
        <TaskItemTwo
          title="Welcome"
          description="Welcome to your task manager"
          buttonTwo="Delete"
        />
      </div>
    </div>
    )
}

export default CompletedTaskScreen