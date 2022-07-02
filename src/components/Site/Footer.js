import React from 'react'

function Footer() {
  return (
    <footer class="footer">
	<div class="container">
	<div class="row">
    	<div class="col-md-4 ftr-box">
        	<h3 class="ftr-title">SERVICES</h3>
            <ul class="ftr-nav">
            	<li><a href="#">NFT Project</a></li>
                <li><a href="#">Smart Contract - Solidity</a></li>
                <li><a href="#">Smart Contract - RUST</a></li>
                <li><a href="#">Dapp</a></li>
                <li><a href="#">Web 3 Intergration</a></li>
            </ul>
        </div>
        <div class="col-md-4 ftr-box">
        	<h3 class="ftr-title">MENU</h3>
            <ul class="ftr-nav">
            	<li><a href="#">Lazy Dev</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="col-md-4 ftr-box last">
        	<h3 class="ftr-title">CONTACT</h3>
            <ul class="ftr-social">
            	<li><a href="#"><i class="fa-brands fa-google-plus-g"></i>LazyDevs@Gmail.com</a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i>Twitter - @LazyDevs</a></li>
                <li><a href="#"><i class="fa-brands fa-github"></i>Github - LazyDevs</a></li>
            </ul>
        </div>
    </div>
    <div class="row cstm-row1">
    <div class="col-12">
    	<div class="ftr-bot">
            <p class="copyright m-0">&copy;Copyright All Rights Reserved</p>
        </div>
     </div>   
    </div>
    </div>
</footer>
  )
}

export default Footer