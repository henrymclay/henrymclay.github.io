import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

export default function CV() {
  return (
    <>
      <Head>
        <title>Henry Clay</title>
        <meta name="description" content="Henry Clay's Curriculum Vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
         <h2><Link href="/cv">Curriculum Vitae</Link></h2>
          <section className={styles.category}>
            <h3>Work History</h3>
            <section className={styles.entry}>
              <h4>Web Developer April 2017 – present</h4>
                <ul>
                  <li>Design, develop and maintain websites </li>
                </ul>
              </section>
              <section className={styles.entry}>
                <h4>Specialist Laboratory Technician March 2023 – March 2024</h4>
                <ul>
                  <li>Developed & implemented specialized manufacturing processes</li>
                </ul>
              </section>
              <section className={styles.entry}>
                <h4>Automation Technician June 2020 – March 2023</h4>
                <ul>
                  <li>Planned and implemented automated cultivation processes for next-gen farms.</li>
                </ul>
              </section>
              <section className={styles.entry}>
                <h4>QA Analyst January 2018 – April 2019</h4>
                <ul>
                  <li>Tested mobile apps: accessibility, regression, new features.</li>
                </ul>
              </section>
              <section className={styles.entry}>
                <h4>DevOps Engineer January 2016 – March 2017</h4>
                <ul>
                  <li>Created automated feature and integration test scripts for social music iOS app.</li>
                  <li>Developed build/test server saving 20% developer hours on new features.</li>
                </ul>
              </section>
            </section>
            <section className={styles.category}>
              <h3>Education</h3>
              <section className={styles.entry}>
                <h4>
                  B.Sc. in Computer Science
                  Oregon State University
                </h4> 
                <p>May 2020</p>
                <ul>
                  <li>JS/React, C/C++, Java, Python.</li>
                  <li>UX Design, mobile & cloud apps, algorithms, operating systems, networks.</li>
                </ul>
              </section>
              <section className={styles.entry}>
                <h4>
                  B.A. in Philosophy
                  New York University
                </h4> 
                <p>May 2012</p>
                <ul>
                  <li>Logic, Philosophy of Science, Artificial Intelligence</li>
                </ul>
              </section>
            </section>
            <section className={styles.category}>
              <h3>Articles</h3>
              <section className={styles.entry}>
                <h4>Transparent Outlines for HTML Elements using Vanilla CSS - March 2025</h4>
                <Link href="https://dev.to/clayhdev/transparent-outlines-for-html-elements-using-vanilla-css-i87" target="_blank"> 
                  Read at dev.to
                </Link>
              </section>
            </section>
        </main>
    </>
  );
}