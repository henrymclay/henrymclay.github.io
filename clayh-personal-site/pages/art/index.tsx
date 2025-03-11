import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';


export default function Art() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
            <h2><Link href="/art">Art</Link></h2>
            <section className={styles.category}>
                <h3>Under Construction!</h3>
            </section>
        </main>

    </>
  )};