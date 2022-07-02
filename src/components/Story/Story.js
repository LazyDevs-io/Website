import React, { useLayoutEffect } from 'react'
import './Story.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function Story() {
  AOS.init();
    // const checkpoint = 1400;
    // useLayoutEffect(() => {
    //   let opacity = 1;
    // window.addEventListener("scroll", () => {
    //   const currentScroll = window.pageYOffset;
    //   if (currentScroll <= checkpoint && currentScroll > 100) {
    //     opacity = 1 - currentScroll / checkpoint;
    //     console.log(currentScroll)
    //   } else {
    //     opacity = 0;
    //   }
    //   document.querySelector(".Story").style.opacity = opacity;
    // });
    // }, []);


  return (
    <section className='panel Story'>
        <div className="Story-container">
            <div data-aos="fade-in" data-aos-easing="linear" className="Story-text-container">
                <p>Oh you want to know more?</p>
                <p>Errrr Fine....</p>
            </div>

        </div>
    </section>
  )
}

export default Story