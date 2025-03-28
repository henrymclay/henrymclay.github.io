import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';


function Moon() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Information on the Moon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <section>
            <h2><Link href="/moon">Information about the Moon</Link></h2>
            </section>
        </main>

    </>
  );
}

export default Moon;