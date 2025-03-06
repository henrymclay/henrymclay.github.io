import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GradientBG from "@/components/gradientBG";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Moon() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Information on Earth's Moon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <GradientBG 
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`} 
        lightSize={`60`}
      >
        <Navbar title={""} />
        <main className={styles.main}>
            <section>
            <h2>Information on Earth's Moon</h2>
            </section>
        </main>
        <Footer title={""} />
      </GradientBG>
    </>
  );
}