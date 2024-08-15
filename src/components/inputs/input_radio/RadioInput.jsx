

import React, { useState } from 'react'
import { RadioContent, RadioInputError, RadioInputStyle, RadioItem, RadioLabel, RadioWrapper, SelectInputStyle } from './RadioInput.style'
import { FaBullseye } from 'react-icons/fa';

export default function RadioInput({ options, defaultValue, onChange, error}) {

    const [selectedOption, setSelectedOption] = useState(defaultValue);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      if (onChange) {
        onChange(event.target.value);
      }
    };
 

  return (
        <RadioWrapper>
            <p>{'Gender'}</p>
            
            <RadioContent>
                {
                    options.map((option, i) => (
                                <RadioItem key={i}>
                                    <RadioInputStyle  
                                        type="radio"
                                        id={option.value}
                                        name="options"
                                        value={option.value}
                                        checked={selectedOption === option.value}
                                        onChange={handleOptionChange}
                                    />
                                    <RadioLabel htmlFor={option.value}>{option.value}</RadioLabel>
                                </RadioItem>
                    ))
                }
            </RadioContent>
            {error? <RadioInputError>{"Gender"} is required</RadioInputError> : '' }
        </RadioWrapper>
  )
}



