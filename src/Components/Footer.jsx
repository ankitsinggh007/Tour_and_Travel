import React from 'react'
import { FaFacebook } from "react-icons/fa"

import { BsLinkedin } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { Typography } from '@mui/material'
import   "./Footer.css"

function Footer() {
  return (
    <>
    <div className="container_footer">
        <div className="col-sm-12 col-md-6">
            <Typography variant='h6' color="white" >About</Typography>
          <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
        </div>

        
        <div className="col-xs-6 col-md-3">
        <Typography variant='h6' color="white"  >Quick Links</Typography>
          
          <ul className="footer-links" style={{listStyle:"none" }}>
            <li><a href="http://scanfcode.com/about/">About Us</a></li>
            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
          </ul>
        </div>
          
          <div >
        <Typography variant='h6' color="white" >Social Links</Typography>

          <ul className="social-icons">
            
            <li><a className="facebook" href="#"><FaFacebook fontSize={"2.5rem"}/></a></li>
            <li><a className="twitter" href="#"><AiFillTwitterCircle fontSize={"3rem"}/></a></li>
            <li><a className="dribbble" href="#"><BsLinkedin fontSize={"2.5rem"}/></a></li>
          </ul>
        </div>
        <div  className='Copy_right'>
            <Typography className="copyright-text" variant='h5'>Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>
            </Typography>
          </div>
    </div>
    
    </>
  )
}

export default Footer