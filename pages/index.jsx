import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
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
      <Navbar />
      <main className={styles.main}>
        <h1>Home Page</h1>
        <div>
          <h1>
            {/* Go to <a href='/about'>About</a> */}
            Go to <Link href="/about">About</Link>
          </h1>
        </div>
      </main>
    </>
  )
}
