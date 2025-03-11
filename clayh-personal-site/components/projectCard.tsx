import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

type CardProps = {
    title: string,
    line1: string,
    line2: string,
    line3: string,
    link: string,
    linkTitle: string
}; 

function ProjectCard({ title = "", line1 = "", line2 = "", line3 = "", link ="", linkTitle="" }: CardProps) {
    return (
      <>
        <section className={styles.category}>
            <h3>{title}</h3>
            <ul>
                <li>{line1}</li>
                <li>{line2}</li>
                <li>{line3}</li>
                <li>
                    More information is available at: <Link
                         href={link}
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                        {linkTitle}
                    </Link> 
                </li>
            </ul>
        </section>
      </>
    )
  }

  export default ProjectCard

  /*
          <div className={styles.ctas}>
            <a
              href="https://www.github.com/henrymclay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Code 
            </a>
          </div>
            */