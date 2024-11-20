import styles from '../styles/Cell.module.css';

function Cell({ color, hasStar }) {
    return (
        <div className={`${styles.cell} ${color ? styles[color] : ''}`}>
            {hasStar && <span className={styles.star}>&#9733;</span>}
        </div>
    );
}

export default Cell;