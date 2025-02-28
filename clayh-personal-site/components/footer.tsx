import React, { ReactNode } from 'react';
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

type Props = {title : string}; 

function Footer({ title = "" }: Props) {
    return (
      <>
        <footer className={styles.footer}>
          <a
            href="https://www.github.com/henrymclay"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Code 
          </a>
          <a
            href="/cv"
            target="_blank"
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
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Blog 
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Art 
          </a>
          <a
            href="https://technoliches.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >   
            Music 
          </a>
        </footer>
      </>
    )
  }

  export default Footer