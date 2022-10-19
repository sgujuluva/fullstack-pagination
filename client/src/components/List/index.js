import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import styles from "./index.module.css";

export default function List() {
  const limit = 100;
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);

  //getting data from backend using axios
  const getCompaniesListFromServer = async () => {
    await axios
      .get(`http://localhost:3001/companies/list?limit=${limit}&skip=${skip}`)
      .then((response) => setList(response.data.getAllCompanies));
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

  //function for next button
  const handleNext = () => {
    setSkip(skip + limit);
  };

  useEffect(() => {
    getCompaniesListFromServer();
  }, [skip]);

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
<div className="mapping">
          {list.map((item) => (
            <ListItem {...item} />
          ))}
          </div>
          <div className={styles.buttons}>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}
