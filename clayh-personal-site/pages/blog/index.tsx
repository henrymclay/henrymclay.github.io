import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Blog() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
            <h2><a href="/blog">Blog</a></h2>
            <section className={styles.category}>
                <h3>Under Construction!</h3>
            </section>
        </main>

    </>
  )};