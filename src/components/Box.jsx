import styles from '../styles/Box.module.css';

function Box({ color }) {
    return (
        <div className={styles.box} style={{ border: `50px solid var(--${color})` }}>
            {[...Array(4)].map((_, i) => (
                <div key={i} className={`${styles.circle} ${styles[`border_${color}`]}`} />
            ))}
        </div>
    );
}

export default Box;