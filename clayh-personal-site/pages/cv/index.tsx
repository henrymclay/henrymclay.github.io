import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Curriculum Vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar title={""} />
        <main className={styles.main}>
          <h2>Henry Clay</h2>
          <ul>
            <li>Artist</li>
            <li>Developer</li>
            <li>Producer</li>
            <li>Cultivator</li>
            <li>Educator</li>
          </ul>
          {/*
          <div className={styles.ctas}>
            <a
              href="https://www.github.com/henrymclay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Code 
            </a>
          </div>
            */}
        </main>
        <Footer title={""} />
      </div>
    </>
  );
}