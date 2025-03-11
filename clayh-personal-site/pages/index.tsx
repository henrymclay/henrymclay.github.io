import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
          <h2>Henry Clay</h2>
          <ul>
            <li>Artist</li>
            <li>Developer</li>
            <li>Producer</li>
            <li>Cultivator</li>
            <li>Educator</li>
          </ul>
        </main>

    </>
  );
}


