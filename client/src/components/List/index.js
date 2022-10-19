import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import styles from "./index.module.css";

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <h1>This is the list!</h1>
      <p>As you can see it is empty</p>
      <p>Load some data from your API using the useEffect statement</p>

      <div className={styles.buttons}>
        <button>Previous</button>
        <button>Next</button>
      </div>

      {list.map((item) => (
        <ListItem {...item} />
      ))}
    </div>
  );
}
