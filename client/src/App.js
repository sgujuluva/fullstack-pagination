import List from "./components/List";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Welcome to your website</h1>
      <img
        alt="Gir"
        src="https://media.giphy.com/media/CxIz1GZEw4St2/source.gif"
      />
      <List />
    </div>
  );
}

export default App;
