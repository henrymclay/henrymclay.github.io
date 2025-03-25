import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

export default function Bio() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
            <h2><Link href="/bio">About Me</Link></h2>
            <section className={styles.category}>
                <h4>Under Construction!</h4>
                <p></p>
                <h4>Under Construction!</h4>
                <p></p>
                <h4>Under Construction!</h4>
                <p></p>
                <h4>Under Construction!</h4>
                <p></p>
            </section>
        </main>

    </>
  )};