import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

type SystemProps = {
    title: string,
}; 

function SolarSystem({ title = "" }: SystemProps) {
    return (
      <>
        <section className={styles.category}>
            
        </section>
      </>
    )
  }

  export default SolarSystem