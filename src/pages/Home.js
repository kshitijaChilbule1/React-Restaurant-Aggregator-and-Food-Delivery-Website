import React from 'react';
import Homepage from './Homepage';
import NavbarComp from '../components/NavbarComp'
import MenuGallery from '../components/MenuGallery';
import ServicesCards from '../components/ServicesCards';


const Home = () => {
  return (
    <div>
      <NavbarComp/>
      <Homepage/>
      <MenuGallery/>
      <h1 style={{textAlign: 'center', padding:'80px', fontSize:'30px'}}>Our Services</h1>
      <ServicesCards/>
    </div>
  )
}

export default Home
