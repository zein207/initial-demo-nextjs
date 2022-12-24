import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Go to <a href='/about'>About</a>
          </h1>
        </div>
      </main>
    </>
  )
}
