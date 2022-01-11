import * as React from "react";
import { NavLink } from "react-router-dom";
import GlobalTitle from './GlobalTitle'
import product1 from '../data/img/banner/banner1.png'
import product2 from '../data/img/banner/banner2.png'
import product3 from '../data/img/banner/banner3.png'


import { Carousel } from 'react-bootstrap'

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={product2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item> 
        <img className="d-block w-100" src={product3} alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}
export default NavList