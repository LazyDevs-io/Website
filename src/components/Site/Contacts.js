import React from 'react'

function Contacts() {
  return (
    <section class="contact-section section-gap-tb">
<div class="container">
	<div class="row">
    	<div class="col-md-6 form-lft">
        	<img src="images/contact-img.png" class="center-img"/>
        </div>
        <div class="col-md-6">
        <h2 class="h2-title title-mb-sm">Contact <span>us</span></h2>
        <div>
		 <form class="contact-form" id="" name="" action="" method="">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-fld">
                         <input type="text" id="" name="" class="form-control" placeholder="Name"/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-fld">
                         <input type="text" id="" name="" class="form-control" placeholder="Email"/>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-fld">
                         <input type="text" id="" name="" class="form-control" placeholder="Contact No"/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-fld">
                         <input type="text" id="" name="" class="form-control" placeholder="Company Name"/>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                		<div class="form-fld">
                         <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>
                        </div>
                    </div>
                </div>
                
                <div class=" text-end">
                <a href="#" class="cta-btn btn-color-sky submit-btn" onclick="">Submit</a>
            	</div>

            </form>

            
        </div>
        </div>
    </div>
</div>
    
</section>
  )
}

export default Contacts