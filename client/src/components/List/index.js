import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import styles from "./index.module.css";

export default function List() {
  const limit = 25;
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);

  //getting data from backend using axios
  const getCompaniesListFromServer = async () => {
    await axios
      .get(`http://localhost:3001/companies/list?skip=${skip}&limit=${limit}`)
      .then((response) => setList(response.data));
  };

  //function for previous button
  const handlePrevious = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    } else {
      setSkip(newSkip);
    }
  };
  useEffect(() => {
    getCompaniesListFromServer();
  }, []);

  return (
    <div className={styles.container}>
      {!list ? (
        <>
          <p>As you can see it is empty</p>
          <p>Load some data from your API using the useEffect statement</p>
        </>
      ) : (
        <>
          <h1>
            This is the list! Displaying listings {skip} to {skip + limit}
          </h1>
          <div className={styles.buttons}>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>

          {list.map((item) => (
            <ListItem {...item} />
          ))}
        </>
      )}
    </div>
  );
}
