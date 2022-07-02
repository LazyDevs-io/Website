import React from 'react'
import './Moon.css'
import img from '../../assets/img/moon.png'
import particlesJS from 'particles.js';
import path from '../../assets/particlesjs-config.json'

function Moon() {
    
    window.particlesJS.load('particles-js', '../../assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
      });
  return (
   <>
    {/* <div className="Moon-container">
        <div className="Moon-img-container">
            <img src={img} alt="" />
        </div>
    </div> */}

    <div id="particles-js"></div>
   </>
  )
}

export default Moon