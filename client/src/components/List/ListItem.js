import styles from './ListItem.module.css';

export default function ListItem(props) {
    return (
      

        <div className={styles.container}>
        
            <ul>
                <li>{props.name}</li>
                <li>{props.email_address}</li>
                
            </ul>

        </div>
        
    )
}

{/*  <div className="list-container"> </div> */}