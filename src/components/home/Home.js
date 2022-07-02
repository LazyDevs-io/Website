import React, { useLayoutEffect } from 'react'
import './Home.css'
import gif from '../../assets/img/Hero.gif'

function Home() {
  // const checkpoint = 300;
  // useLayoutEffect(() => {
  //   let opacity;
  // window.addEventListener("scroll", () => {
  //   const currentScroll = window.pageYOffset;
  //   if (currentScroll <= checkpoint) {
  //     opacity = 1 - currentScroll / checkpoint;
  //   } else {
  //     opacity = 0;
  //   }
  //   document.querySelector(".Home").style.opacity = opacity;
  // });
  // }, []);

  const [isVisible, setIsVisible] = React.useState(true);

  function Hidden() {
      document.getElementById('loader').className = "clicked panel home";
      setTimeout(() => {
        // setIsVisible(false);
      }, 3000);
      
  }


  return (
    <>
    {
      isVisible ?
        <section id='loader' className='panel Home'>

            <div className="Home-container">

            <div className="Hero-img-container">
                <img src={gif} alt="" />
            </div>
            
            <div className="Hero-text-container">
            <p>Sorry, We were too lazy to finish the website....</p>
            <p>Here is our links!</p>
            </div>
            </div>
            <div className="Hero-mid-container">
                <p>Community Discord | GitHub | Email</p>
            </div>
            <div className="Hero-bottom-container" onClick={Hidden}>
                <p>Click here to find out more...</p>
            </div>
        </section>
      
      : <></>
    }
    </>
  )
}

export default Home