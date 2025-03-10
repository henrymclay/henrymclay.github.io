import React, { ReactNode } from 'react';
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

type Props = {title : string}; 

function Footer({ title = "" }: Props) {
    return (
      <>
        <footer className={`${styles.footer} ${geistSans.variable} ${geistMono.variable}`}>
        <a
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >   
            Home 
          </a>
          <a
            href="/contact"
            target="_self"
            rel="noopener noreferrer"
          >   
            Contact 
          </a>
          <a
            href="/cv"
            target="_self"
            rel="noopener noreferrer"
          >   
            CV 
          </a>
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Projects 
          </a>
          <a
            href="https://www.github.com/henrymclay"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Code (Github)
          </a>
          <a
            href="https://technoliches.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Music (Bandcamp)
          </a>
        </footer>
      </>
    )
  }

  export default Footer