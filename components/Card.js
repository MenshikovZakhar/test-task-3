import Link from 'next/link'
import styles from "../styles/index.module.css";

export default (props) => {
    return (
        <li className={styles.elements__card}>

            <img className={styles.image} src={props.data.images.path} />
            <div className={styles.elements__description}>
                <p className={styles.card__text}>Диван</p>
                <p className={styles.card__text}>{props.data.price}</p>
            </div>

            <Link href={{ pathname: '/card', query: { id: props.id } }}>
                <button className={styles.card__button} type="button">Посмотреть</button>
            </Link>
        </li>
    )
}











