import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Contact Info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
          <h2><a href="/contact">Contact</a></h2>
            <section className={styles.category}>
              <section className={styles.entry}>
                <p>Email: </p>
                <p>
                  <a 
                    href="mailto:mr.henry.clay@gmail.com" 
                    rel="external" 
                    target="_blank">
                    mr.henry.clay@gmail.com
                  </a>
                </p>
              </section>
              <section className={styles.entry}>
                <p>LinkedIn:</p>
                <p>
                  <a 
                    href="https://www.linkedin.com/in/henry-clay-2160ba352" 
                    rel="external" 
                    target="_blank">
                    linkedin.com/in/henry-clay-2160ba352
                  </a>
                </p>
              </section>
              <section className={styles.entry}>
                <p>Github:</p>
                <p>
                  <a 
                    href="https://www.github.com/henrymclay" 
                    rel="external" 
                    target="_blank">
                    github.com/henrymclay
                  </a>
                </p>
              </section>
            </section>
        </main>
    </>
  )};