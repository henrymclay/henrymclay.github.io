import React from 'react';

type NavProps = {title : string}; 

function Navbar({ title = "" }: NavProps) {
    return (
      <>
          <a href="/"><h1>{title}</h1></a>
      </>
    )
  }

  export default Navbar