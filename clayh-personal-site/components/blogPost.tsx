import React from 'react';
import styles from "@/styles/Home.module.css";

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