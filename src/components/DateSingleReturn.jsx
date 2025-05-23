// DateRangePickerCalender.js
import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
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
     z-index: 9999;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default function DateSingleReturnCalender({ setReturnDate }) {
  const [dateValue, setDateValue] = useState(new DateObject());

  const handleDateChange = (newDateValue) => {
    setDateValue(newDateValue);

    // Update depart date when user selects a new date
    setReturnDate(newDateValue.format('YYYY-MM-DD'));
  };

  return (
    <StyledDatePickerWrapper>
      <DatePicker
        value={dateValue}
        onChange={handleDateChange}
        numberOfMonths={2}
        portal={false}  // Use inline calendar
        calendarPosition="bottom-left"
      />
    </StyledDatePickerWrapper>
  );
}
