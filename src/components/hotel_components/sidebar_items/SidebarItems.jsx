
import React, { useState } from 'react'
import { ItemsWrapper } from './SidebarItems.style'

export default function SidebarItems(
  {value, counter, setValue, counterColor,          
}) {


    const [isChecked, setIsChecked] = useState(false);
    // const [value, setValue] = useState('');
    
    // Handler for checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      if (!isChecked) {
       setValue(event.target.value);
      }
    };


  
  return (
  <ItemsWrapper counterColor={counterColor}>
    <span>
        <input
           type="checkbox"
           id="terms"
           checked={isChecked}
            onChange={handleCheckboxChange}
            value={value}
        />
        <p>{value}</p>
    </span>
    <div>
        {counter && counter.map((item)=>(
            <p>{item}</p>
        ))}
    </div>

  </ItemsWrapper>
  
  )
}
