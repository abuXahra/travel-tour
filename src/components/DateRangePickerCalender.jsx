





// DateRangePickerCalender.js
import React, { useState } from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker";
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import styled from 'styled-components';

const StyledDatePickerWrapper = styled.div`
  /* Style only the input field */
  .rmdp-input {
    width: 100%;
    background-color: #0d398428;  /* Light background */
    padding: 30px 20px;
    border-radius: 10pxpx;
    border: none;
    font-size: 18px;
    color: #333;
  }
`;

export default function DateRangePickerCalender({setDepartDate, setReturnDate}) {
  
  



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
        }
       
      };

  return (
    <StyledDatePickerWrapper>
     <DatePicker
        value={dateValue}
        onChange={handleDateChange}
        range
        numberOfMonths={2}
        portal={false}  // ← important!
        calendarPosition="bottom-left"
        plugins={[<Footer position="bottom" />]}
/>
    </StyledDatePickerWrapper>
  );
}



