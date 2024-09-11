

import React from 'react'
import { ContactsContent, ContactSectionTitle, ContactsItems, ContactsItemsAddress, ContactsSection, ContactsWrapper, ContactTitleContainer } from './Contact.style'
import HeroSection from '../../components/hero/HeroSection'
import heroImage from '../../images/call.jpg'

export default function Contact() {


    const contacts = [
        {
            office: "Head Office",
            address: "Plot 1099, Adamawa Plaza, Central Area Abuja, FCT",
            phone:"(07049216062), 07049216063, 07049216065, 07049216067",
            email: "contact@manzotravelandtours.com"
        },
        {
            office: "Adamawa Office",
            address: "Lamido Aliyu Way, Along Yola Road, New Item 7, Opp. Federal Secretariat, Jimeta Yola, Adamawa State",
            phone:"(07049216062), 07049216063, 07049216065, 07049216067",
            email: "contact@manzotravelandtours.com"
        },
    ]


  return (
    <div>
        {/* hero section with form */}
 <HeroSection heroImage={heroImage}>
        
        {/* flight form section */}
        <ContactTitleContainer sectionHeight={'400px'}>
          
          {/* flight form section  title */}
          <ContactSectionTitle>
              <h4>Need a spacial request?</h4>
              <h1>Contact Us</h1> 
          </ContactSectionTitle>
        </ContactTitleContainer>
      </HeroSection>
        
        {/* <!-- contacts section --> */}
    <ContactsSection>
                <ContactsWrapper>
                   {
                    contacts.map((contact, i)=>(
                        <ContactsContent key={i}>
                            <ContactsItems wd={"px"}>
                                <h4>{contact.office}</h4>
                            </ContactsItems>
                            <ContactsItemsAddress>
                                <p>{contact.address}</p>
                                <span>{contact.phone}</span>
                            </ContactsItemsAddress >
                            <ContactsItems>{contact.email}</ContactsItems>
                        </ContactsContent>
                    ))
                    }

                </ContactsWrapper>
    </ContactsSection>
    </div>
  )
}
