import styles from './ListItem.module.css';

export default function ListItem(props) {
    return (
        <div className={styles.container}>
        
            <ul className="companies-list">
                <li>{props.name}</li>
                <li>{props.email_address}</li>
                
            </ul>

        </div>
    )
}
