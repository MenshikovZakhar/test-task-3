import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import styles from "../styles/index.module.css";
import Head from 'next/head'
import Card from '../components/Card';
export default class extends Component {
    static async getInitialProps({ query }) {
        const { id } = { ...query }
        const res = await fetch('http://localhost:4000/cards/${id}')
        const card = await res.json()
        return { card }
    }
    componentWillMount() {
        this.setState({
            card: this.props.card
        })
    }

    render() {
        return (
            <>
                <Head>
                    <title>Товар</title>
                    <meta charSet='utf-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div className={styles.page}>

                    <p className={styles.card__text}>{this.state.card.price}</p>

                </div>
            </>
        )
    }
}