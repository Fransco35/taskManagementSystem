import styles from "./TaskItem.module.css";
import Card from "../Card/Card";
const TaskItem = (props) => {
  return (
    <Card style={{ width: "300px", margin: "20px 0" }}>
      <div className={styles.taskItem}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button className={styles.button} onClick={props.onClickOne}>
          {props.buttonOne}
        </button>
        <button className={styles.button} onClick={props.onClickTwo}>
          {props.buttonTwo}
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;
