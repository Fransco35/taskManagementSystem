import styles from "./TaskItem.module.css";
import Card from "../Card/Card";
const TaskItemTwo = (props) => {
  return (
    <Card style={{ width: "300px", margin: "20px 0" }}>
      <div className={styles.taskItem}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button className={styles.button} onClick={props.onClick}>
          {props.button}
        </button>
      </div>
    </Card>
  );
};

export default TaskItemTwo;
