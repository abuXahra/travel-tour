import React from 'react'
import { AwardWrapper, CopyWriterWrapper, FooterContent, FooterItems, FooterItemWrapper, FooterSocialWrapper, FooterWrapper, SocialIconsContent, SocialIconsWrapper } from './Footer.style'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import iata from '../../images/iata2.png'
import skytrax from '../../images/svg-icon/skytrax.svg'

export default function Footer() {
  return (
    <FooterWrapper>

      {/* Footer contents */}
      <FooterContent>
        <FooterItemWrapper>
                
        <div>
            <FooterItems>
              <p>MANZO AIRLINE</p>
              <a href="#"><p>Careers</p></a> 
              <a href="#"><p> Press releases</p></a> 
              <a href="#"><p> Annual reports</p></a>   
              <a href="#"><p> Environmental </p></a> 
              <a href="#"><p> Sponsorship</p></a>          
              <a href="#"><p> sustainability</p></a>        
            </FooterItems>
            <FooterItems>
              <p>MANZO GROUP COMPANY</p>
              <a href="#"><p>Hamad International Airport</p></a> 
              <a href="#"><p> Manzo Executive</p></a> 
              <a href="#"><p>Manzo Duty Free</p></a>
              <a href="#"><p>Manzo Airline Cargo</p></a>   
              <a href="#"><p> Internal Media Services</p></a> 
              <a href="#"><p> Design Organisation</p></a>          
              <a href="#"><p>Group Companies</p></a>        
            </FooterItems>
            </div>
        <div>
             <FooterItems>
              <span>BUSINESS SOLUTIONS</span>
              <a href="#"><p>Corporate travel</p></a> 
              <a href="#"><p> Beyond Business</p></a> 
              <a href="#"><p>QMICE meetings and events</p></a>
              <a href="#"><p> Advertise with us</p></a>           
            </FooterItems>
            <FooterItems>
              <p>BUSINESS PARTNERS</p>
              <a href="#"><p>Affiliate marketing</p></a> 
              <a href="#"><p> e-Procurement and Supplier Registration</p></a> 
              <a href="#"><p>Trad partners</p></a>   
              <a href="#"><p>Contact us</p></a> 
              <a href="#"><p>Travel alert</p></a>     
            </FooterItems>
   
        </div>

        </FooterItemWrapper>
        <FooterSocialWrapper>
            <span>
              <span>CERTIFIED BY:</span> <div><hr /></div> <img src={iata} alt="" srcset="" />
            </span>
            <SocialIconsWrapper>
              <span>Let's stay connected</span>
                <SocialIconsContent>
                    <div><FaFacebook/></div>
                    <div><FaTwitter/></div>
                    <div><FaInstagram/></div>
                    <div><FaLinkedin/></div>
                    <div><FaYoutube/></div>
                </SocialIconsContent>
            </SocialIconsWrapper>
        </FooterSocialWrapper>
      </FooterContent>

{/* Award */}
      <AwardWrapper>
          <div>
            <img src={skytrax} alt="" srcset="" />
            <p>World’s Best Airline</p> 
          </div>
          <div>
            <img src={skytrax} alt="" srcset="" />
            <p>World's Best Business Class</p> 
          </div>
          <div>
            <img src={skytrax} alt="" srcset="" />
            <p>World's Best Business Class Lounge</p> 
          </div>
          <div>
            <img src={skytrax} alt="" srcset="" />
            <p>Best Airline in the Middle East</p> 
          </div>
      </AwardWrapper>
<hr />
      {/* Copyright */}
      <CopyWriterWrapper>
        <div>
          <ul>
              <li><a href="">Cookie policy</a></li> 
              <li><a href="">Legal</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Accessibility</a></li>
              <li><a href="">Combating human trafficking</a></li>
              <li><a href="">Sitemap</a></li>
              <li><a href="">Cookie Consent</a></li> 
          </ul>
        </div>
        <span>Manzo Airline. All rights reserved</span>
      </CopyWriterWrapper>
    </FooterWrapper>
  )
}
