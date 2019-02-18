import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head';

import Menu from '../components/menu/menu'
import "../static/app.css"

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
        <Component {...pageProps} />
      </Container>
      </div>
    )
  }
}
