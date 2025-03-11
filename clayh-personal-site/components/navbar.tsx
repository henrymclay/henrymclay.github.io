import React from 'react';
import Link from 'next/link';

type NavProps = {title : string}; 

function Navbar({ title = "" }: NavProps) {
    return (
      <>
          <Link href="/"><h1>{title}</h1></Link>
      </>
    )
  }

  export default Navbar