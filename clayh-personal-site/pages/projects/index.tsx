import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Projects() {
    return (
      <>
        <Head>
          <title>Henry Clay</title>
          <meta name="description" content="Henry Clay's Projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
          <Navbar title={""} />
          <main className={styles.main}>
              <ProjectCard 
                title = "Lorem Ipsum"
                line1 = "dolor sit amet"
                line2 = "consectetur adipiscing elit "
                line3 = "sed do eiusmod tempor incididunt"
              />
              <ProjectCard 
                title = "Lorem Ipsum"
                line1 = "dolor sit amet"
                line2 = "consectetur adipiscing elit "
                line3 = "sed do eiusmod tempor incididunt"
              />
              <ProjectCard 
                title = "Lorem Ipsum"
                line1 = "dolor sit amet"
                line2 = "consectetur adipiscing elit "
                line3 = "sed do eiusmod tempor incididunt"
              />
          </main>
          <Footer title={""} />
        </div>
      </>
    );
  }