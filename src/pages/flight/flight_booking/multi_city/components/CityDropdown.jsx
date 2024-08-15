import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 16px;
`;

const Option = styled.option``;

const CityDropdown = ({ placeholder, selectedValue, onChange }) => {
  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <DropdownContainer>
      <Select value={selectedValue} onChange={handleSelectChange}>
        <Option value="" disabled>
          {placeholder}
        </Option>
        {/* Replace with actual list of airports/cities */}
        <Option value="NYC">New York City</Option>
        <Option value="LAX">Los Angeles</Option>
        <Option value="SFO">San Francisco</Option>
        <Option value="ORD">Chicago</Option>
        <Option value="MIA">Miami</Option>
      </Select>
    </DropdownContainer>
  );
};

export default CityDropdown;
