import { Html, Head, Main, NextScript } from 'next/document';
import HeadFiles from '../../components/includes/HeadFiles';
import Header from '../../components/includes/Header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeadFiles />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html >
  )
}
