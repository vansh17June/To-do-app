import styles from "./Welcome.module.css";
import { useContext } from "react";
import { TodoItemscontext } from "../store/todo-item-store";

function Welcome() {
  const {todotask} = useContext(TodoItemscontext);

  if (todotask.length === 0) {
    return <p className={styles.text}>You have no tasks to do</p>;
  }

  return null;
}

export default Welcome;
