import React from 'react'
import { HomePageWrapper, HomeTopSection } from './HomePage.style'
import HeroSection from '../../components/hero/HeroSection'
import homeBg from '../../images/travelunsplash.jpg'
import FlightFormComponents from '../../components/Flight/flight_form_compnents/FlightFormComponents'

export default function HomePage() {
  return (
    <HomePageWrapper>
      <HeroSection heroImage={homeBg}>
      <HomeTopSection>
          <h4>Best travel agency</h4>
          <h1>Journey conveniently with Manzo Travel</h1> 
      </HomeTopSection>
 
      </HeroSection>

      <h1>Homepage</h1>

      <a href="/flight-booking">Flight Booking Page</a>
      
    </HomePageWrapper>
  )
}
