import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>About Page</h1>
        <div>
          <h1 className={styles.title}>
            {/* Go to <a href='/'>Home</a> */}
            Go to <Link href="/">Home</Link>
          </h1>
        </div>
      </main>
    </>
  )
}
