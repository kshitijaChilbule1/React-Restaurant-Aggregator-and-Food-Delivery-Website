import React from 'react'
import NavbarComp from '../components/NavbarComp';
import RestaurantSearch from '../components/RestaurantSearch';
import RestaurantList from '../pages/RestaurantList';

const Menu = () => {
  return (
    <div>
      <NavbarComp/>
      <RestaurantSearch/>
      <RestaurantList/>
    </div>
  )
}

export default Menu
