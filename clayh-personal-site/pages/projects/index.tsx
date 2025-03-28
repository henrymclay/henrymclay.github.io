import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ProjectCard from "@/components/projectCard";
import Link from 'next/link';

export default function Projects() {
    return (
      <>
        <Head>
          <title>Henry Clay</title>
          <meta name="description" content="Henry Clay's Projects" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <main className={styles.main}>
          <h2><Link href="/projects">Selected Projects</Link></h2>
              <ProjectCard 
                title = "xFader"
                line1 = "A python CLI utility for manipulating music samples."
                line2 = "xFader detects the bpm and re-pitches clips to a target bpm."
                line3 = "Planned features include smart slicing and crossfading."
                link = "https://www.github.com/henrymclay/xfader"
                linkTitle="xFader on Github"
              />
              <ProjectCard 
                title = "Medusa Studio"
                line1 = "A gallery website for a professional artist."
                line2 = "Written in React then ported to Wordpress."
                line3 = "Designed to be functional for non-technical users"
                link = "https://www.medusastudio.com"
                linkTitle="Medusa Studio"
              />
              <ProjectCard 
                title = "Romanesco"
                line1 = "A React Native app that shows nearby grocery store prices based on location."
                line2 = "Users can upload product information through the app to a database."
                line3 = "Capstone project for Oregon State University. A demo video is available upon request."
                link = "https://github.com/RDMoore95/CrowdSourceShopping"
                linkTitle="Romanesco on Github"
              />
          </main>
      </>
    );
  }