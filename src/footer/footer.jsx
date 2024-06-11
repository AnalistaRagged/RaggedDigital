import React from 'react';
import './footer.css';
import fb from '../assets/fbimg.png'
import instagram from '../assets/instagramimg.png'
import youtube from '../assets/youtubeimg.png'
import pinteres from '../assets/pinteresimg.png'
import logoblanco from'../assets/logoblanco.png'

const Footer =()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding"> 
                <div className="sb_footer-links">
                <div className="sb_footer-links_div"> 
                <p><img src={logoblanco} alt=" " /></p>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={instagram} alt=""/></p> 
                            <p><img src={youtube} alt=""/></p> 
                            <p><img src={pinteres} alt=""/></p>
                        </div>
                </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>                    
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>

                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about"> 
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div"> 
                        <h4>For Business</h4>
                        <a href="/employer"> 
                            <p>Employer</p>
                        </a>
                        <a href="/Health Plan"> 
                            <p>Health Plan</p>
                        </a>
                        <a href="/Individual"> 
                            <p>Individual</p>
                        </a>
                    </div>
                </div>

                <hr></hr>
I
                <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Ragged. All right reserved.
                        </p> 
                    </div>
            </div>
        </div>        
    )
}


export default Footer;