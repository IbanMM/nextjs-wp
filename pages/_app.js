import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';

import Menu from '../components/menu/menu'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <div>
      <Menu />
      <Container>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet" /> 
        </Head>
        <Component {...pageProps} />
      </Container>
      </div>
    )
  }
}
