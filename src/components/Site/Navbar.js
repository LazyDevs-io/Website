import React from 'react'
import img from '../../assets/img/Hero.gif'

function Navbar() {
  return (
    <>
    <div class="nav-container">
    <div class="hamburger" id="hamburger">
    <span class="line-1"></span>
    <span class="line-2"></span>
    <span class="line-3"></span>
    </div>
	<div class="logo-holder"><a href="#"><img src={img} class="main-logo" width="180"  alt="logo"/></a></div>
    <ul class="top-nav navigation">
    <li><a href="#">lazyDevs</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Tools</a></li>
    <li><a href="#">Contact us</a></li>
    {/* <li><a href="#" class="nav-btn">Get a free quote</a></li> */}
    </ul>
</div>
    </>
  )
}

export default Navbar