import styles from './ListItem.module.css';

export default function ListItem(props) {
    return (
        <div className={styles.container}>
        
            <h1>{props.name}</h1>

        </div>
    )
}
