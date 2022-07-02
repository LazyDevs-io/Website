import React from 'react'

function Welcome() {
  return (
    <section class="welcome-section">
	<div class="container">
	<div class="row v-cntr mbot-md">
    	<div class="col-md-6 mb-4">
        	<h3 class="h3-title-tp">Who We Are </h3>
            <h2 class="h2-title"><span>About Lazy Developers</span></h2>
            <p>A bunch of digitally inspired guys with a passion for all things game, web and mobile application development. A bunch of digitally inspired guys with a passion for all things game, web and mobile application development. A bunch of digitally inspired guys with a passion for all things game, web and mobile application development.</p>
        </div>
    	<div class="col-md-6">
        	<img src="images/welcome-img.png" alt="welcome-img.png" class="img-holder-rgt"/>
        </div>
        
    </div>
    
    <div class="row">
    <div class="col-12">
        	<ul class="proj-stat-holder">
            	<li>
                	<div class="icon"><img src="images/success-project-icon.png" alt="success-project-icon"/></div>
                    <div>
                    	<p class="txt1">150+</p>
                        <p class="txt2">Successfully<br/>Developed Projects</p>
                    </div>
                </li>
                <li>
                	<div class="icon"><img src="images/idea-icon.png" alt="idea-icon"/></div>
                    <div>
                    	<p class="txt1">200</p>
                        <p class="txt2">Unique<br/>Ideas Submitted</p>
                    </div>
                </li>
                <li>
                	<div class="icon"><img src="images/review-icon.png" alt="review-icon"/></div>
                    <div>
                    	<p class="txt1">90%</p>
                        <p class="txt2">Verified<br/>5 Star Client Reviews</p>
                    </div>
                </li>
                <li>
                	<div class="icon"><img src="images/our-team-icon.png" alt="our-team-icon"/></div>
                    <div>
                    	<p class="txt1">20+</p>
                        <p class="txt2">Professionals<br/>in Our Team</p>
                    </div>
                </li>
            </ul>
     </div>       
        </div>
    </div>
</section>
  )
}

export default Welcome