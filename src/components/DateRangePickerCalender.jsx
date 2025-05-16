





// DateRangePickerCalender.js
import React, { useState, useRef } from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker";
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import styled from 'styled-components';

const StyledDatePickerWrapper = styled.div`
  /* Style only the input field */
  .rmdp-input {
    width: 213%;
    border-radius: 10px;
    box-shadow: none;
    border: none;
    font-size: 15px;
    color: #333;
    background-color: transparent;
    margin-top: 5px;


     @media (max-width:768px) {
        width: 175%;
    }
  }
`;

export default function DateRangePickerCalender({setDepartDate, setReturnDate}) {
  
  

const datePickerRef = useRef(null);


  const [dateValue, setDateValue] = useState([
        new DateObject().setDay(5),
        new DateObject().add(1, "month").setDay(5),
      ]);
    
    
        // const [departDate, setDepartDate] = useState();
        // const [returnDate, setReturnDate] = useState();
      

       


        const handleDateChange = (newDateValue) => {
            setDateValue(newDateValue);
        
        if (Array.isArray(newDateValue) && newDateValue.length === 2) {
            setDepartDate(newDateValue[0]?.format("YYYY-MM-DD"));
            setReturnDate(newDateValue[1]?.format("YYYY-MM-DD"));
            
          // Close the calendar
          if (datePickerRef.current) {
            datePickerRef.current.closeCalendar();
          }
        }
       
      };

  return (
    <StyledDatePickerWrapper>
     <DatePicker
        value={dateValue}
        onChange={handleDateChange}
        range
        numberOfMonths={2}
        portal={true}  // ← important!
        ref={datePickerRef}
        calendarPosition="bottom-left"
        // plugins={[<Footer position="bottom" />]}
/>
    </StyledDatePickerWrapper>
  );
}


