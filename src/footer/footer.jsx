import React from 'react';
import './footer.css';
import fb from '../assets/fbimg.png'
import instagram from '../assets/instagramimg.png'
import youtube from '../assets/youtubeimg.png'
import pinteres from '../assets/pinteresimg.png'


const Footer =()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding"> 
                <div className="sb_footer-links">
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
                        <h4>Partners</h4>
                        <a href="/employer"> 
                            <p>Swing Tech</p>
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
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div"> 
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={instagram} alt=""/></p> 
                            <p><img src={youtube} alt=""/></p> 
                            <p><img src={pinteres} alt=""/></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p> 
                    </div>
                
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a> 
                    <a href="/privac"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a> </div>
                </div> I
            </div>
        </div>        
    )
}


export default Footer;