
import React, { ReactNode } from 'react';
import Navbar from './navbar'
import Footer from './footer'
 
export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Navbar title={""} />
        <main>{props.children}</main>
      <Footer title={""} />
    </>
  )
}