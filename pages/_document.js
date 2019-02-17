// _document --> Esto se renderiza en el servidor
// Event handlers como onClick no se pueden añadir aqui

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify();
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument