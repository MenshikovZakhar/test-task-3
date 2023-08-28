import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import styles from "../../styles/index.module.css";
import Head from 'next/head'

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/cards')
    const cards = await res.json()

    const paths = cards.map((card) => ({
        params: { id: card.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`http://localhost:4000/cards/${params.id}`)

    const card = await res.json()


    return {
        props: {
            card
        }
    }
}

export default function Card({ card }) {
    return (
        <>
            <Head>
                <title>Тестовое задание</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={styles.page}>
                <li className={styles.elements__card}>

                    <img className={styles.image} src={card.images.path} />
                    <div className={styles.elements__description}>
                        <p className={styles.card__text}>Диван</p>
                        <p className={styles.card__text}>{card.price}</p>
                    </div>


                </li>
            </div>
        </>
    )
}





