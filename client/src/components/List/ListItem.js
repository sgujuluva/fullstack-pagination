import styles from './ListItem.module.css';

export default function ListItem(props) {
    return (
        <div className={styles.container}>
            <h1>This is an individual list item</h1>
        </div>
    )
}
