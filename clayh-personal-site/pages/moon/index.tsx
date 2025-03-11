import Head from "next/head";
import styles from "@/styles/Home.module.css";



function Moon() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Information on Earth's Moon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <section>
            <h2><a href="/moon">Information on Earth's Moon</a></h2>
            </section>
        </main>

    </>
  );
}

export default Moon;