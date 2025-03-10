import React, { ReactNode } from 'react';
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type NavProps = {title : string}; 

function Navbar({ title = "" }: NavProps) {
    return (
      <>
          <a href="/"><h1>{title}</h1></a>
      </>
    )
  }

  export default Navbar