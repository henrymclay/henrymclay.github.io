import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

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
        <Link
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >   
            Home 
          </Link>
          <Link
            href="/contact"
            target="_self"
            rel="noopener noreferrer"
          >   
            Contact 
          </Link>
          <Link
            href="/cv"
            target="_self"
            rel="noopener noreferrer"
          >   
            CV 
          </Link>
          <Link
            href="/projects"
            target="_self"
            rel="noopener noreferrer"
          >   
            Projects 
          </Link>
          <Link
            href="https://www.github.com/henrymclay"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Code (Github)
          </Link>
          <Link
            href="https://technoliches.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Music (Bandcamp) {title}
          </Link>
        </footer>
      </>
    )
  }

  export default Footer