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

type Props = {
    title : string,
    body: string,
}; 

function BlogPost({ title = "", body="" }: Props) {
    return (
        <>
            <section className={styles.category}>
                <h3>{title}</h3>
                <p>{body}</p>
            </section>
        </>
    )
}

export default BlogPost