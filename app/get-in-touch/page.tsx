import React from 'react';
import Nav from '../components/Navbar';

import Contact from '../components/GetInTouch';
import Foote from '../components/Footer';



export default function GetInTouch() {
  return (
    <main className="min-h-screen pt-20">

       <Nav/>
      <Contact />
      <Foote />
    </main>
  );
} 