import React from 'react';
import styles from "@/styles/Home.module.css";

type SystemProps = {
    title: string,
}; 

function SolarSystem({ title = "" }: SystemProps) {
    return (
      <>
        <section className={styles.category}>
            {title}
        </section>
      </>
    )
  }

  export default SolarSystem