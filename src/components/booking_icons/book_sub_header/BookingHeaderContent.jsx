import React from 'react'
import { ContentSubHeader } from './BookingHeaderContent.style'
import BookingIcons from '../book_icon/BookingIcons'
import { MdFlightTakeoff, MdHotel } from 'react-icons/md'
import { LiaCcVisa } from 'react-icons/lia'
import GeneralHeaders from './booking_general_headers/GeneralHeaders'

export default function BookingHeaderContent({
  flightOnClickFunc, flightBtBorder,
  manageOnClickFunc, manageBtBorder,
  checkInOnClickFunc, checkInBtBorder,
  flightStatusOnClickFunc, flightStatusBtBorder,
  stopOverOnClickFunc, stopOverBtBorder,
  showItems,
}) {


   // FlightItems
   const FlightItems = [
    {
      title: 'Flight',
      onClickFunc: flightOnClickFunc,
      Icon: <MdFlightTakeoff/>,
      border: flightBtBorder
    },
    {
      title: 'Manage',
      onClickFunc: manageOnClickFunc,
      Icon: <MdHotel/>,
      border: manageBtBorder
    },
    {
      title: 'Check-in',
      onClickFunc: checkInOnClickFunc,
      Icon: <LiaCcVisa/>,
      border: checkInBtBorder
    },
        {
      title: 'Flight status',
      onClickFunc:  flightStatusOnClickFunc,
      Icon: <LiaCcVisa/>,
      border: flightStatusBtBorder
    },
    {
      title: 'Stop-over',
      onClickFunc: stopOverOnClickFunc,
      Icon: <LiaCcVisa/>,
      border: stopOverBtBorder,
    },
  ]



  return (
    <ContentSubHeader>
  {  showItems &&  <div>
            {/* FlightITEMS */}
    { 
      FlightItems.map((item, i)=>(
          <BookingIcons
            key={i}
            title={item.title}
            onClickFunc={item.onClickFunc}
            Icon={item.Icon}
            headerBg={item.bgColor}
            bottomBorder={item.border}
      />
      ))
    }  
      </div>}
      <div>
        <GeneralHeaders backgroundColor={'transparent'} displayInMobile={'flex'} gapInMobile={'15px'}/>
      </div>
    
              
  </ContentSubHeader>
  )
}
