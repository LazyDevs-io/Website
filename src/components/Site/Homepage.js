import React from 'react'
import Navbar from './Navbar'


function Homepage() {
  return (
    <>
    <div class="hero-area">
    <header id="header" class="main-hdr">
    <Navbar/>
    </header>
    <div class="container">
    <div class="row">
    <div class="col-12">
    <div class="hero-txt-outer">
        <div class="hero-txt">
            <h1>Welcome To The <span>LazyDevs</span></h1>
            <p class="quote">I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.</p>
            <p class="quote-name">-Bill Gates </p>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>

  )
}

export default Homepage