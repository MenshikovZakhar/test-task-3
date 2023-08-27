import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import styles from "../styles/index.module.css";
import Head from 'next/head'
export default class extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:4000/cards')
    const cards = await res.json()
    return { cards }
  }
  componentWillMount() {
    this.setState({
      cards: this.props.cards
    })
  }

  render() {
    return (
      <>
        <Head>
          <title>Тестовое задание</title>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.page}>
          <ul className={styles.catalog__elements}>
            {
              this.state.cards.map((card, index) => {
                return (
                  <li className={styles.elements__card} key={index}>

                    <img className={styles.image} src={card.images.path} />
                    <div className={styles.elements__description}>
                      <p className={styles.card__text}>Диван</p>
                      <p className={styles.card__text}>{card.price}</p>
                    </div>
                    <button className={styles.card__button} type="button">Посмотреть</button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </>
    )
  }
}








