
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';
 
export default function Layout(props: { children: ReactNode }) {
  return (
    <>  
      {props.children}; 
    </>
  )
}