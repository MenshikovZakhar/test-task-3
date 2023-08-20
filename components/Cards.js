import styles from "../styles/index.module.css";
import Head from 'next/head'

function Cards() {
    return (
        <>
            <Head>
                <title>Тестовое задание</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.page}>
                <ul className='catalog__elements'>
                    {
                        catalog.map((card, index) => {
                            return (
                                <li className="elements__card" key={index}>
                                    <img className="image" src={card.src} />
                                    <div className="elements__description">
                                        <p className="card__text">Диван</p>
                                        <p className="card__text">{ }</p>
                                    </div>
                                    <button className="card__button" type="button">Посмотреть</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Cards;


