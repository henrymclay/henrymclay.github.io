import React, { ReactNode } from 'react';
import Footer from './footer';
import GradientBG from './gradientBG';
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Analytics/>
      <GradientBG 
          className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`} 
          lightSize={`100`}
      >
          {props.children}
        <Footer title={""}/>
      </GradientBG>
    </>
  )
}