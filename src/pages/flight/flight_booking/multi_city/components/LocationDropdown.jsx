import React from "react";
import { MdFlightTakeoff } from "react-icons/md";
import {
  FaSearchStyled,
  LocationDropdownAbrreviate,
  LocationDropdownInput,
  LocationDropdownLocation,
  LocationDropdownSearchResult,
  LocationDropdownTakeoff,
  LocationDropdownWrapper,
} from "../../../../../components/booking_icons/location_dropdow/LocationDropdown.style";

const LocationDropdown = ({
  onChange,
  items,
  searchInputValue,
  setAirportSelected,
  onCloseDropdown,
  setCityCode,
}) => {
  return (
    <LocationDropdownWrapper>
      {/* <LocationDropdownInput>
        <FaSearchStyled />
        <input
          type="text"
          placeholder="Search..."
          value={searchInputValue}
          onChange={onChange}
        />
      </LocationDropdownInput> */}

      <LocationDropdownSearchResult>
        <h3>Recent Searches</h3>
        {items?.map((item, i) => (
          <LocationDropdownLocation
            key={i}
            onClick={() => {
              setAirportSelected(
                `${item?.Airport_name}, ${item?.Location_served}`
              );
              setCityCode(item?.IATA);
              onCloseDropdown();
            }}
          >
            <LocationDropdownTakeoff>
              <MdFlightTakeoff size={20} />
              <div>
                <p>
                  <b>{item?.Airport_name}</b>
                </p>
                <p>{item?.Location_served}</p>
              </div>
            </LocationDropdownTakeoff>
            <LocationDropdownAbrreviate>
              {item?.IATA}
            </LocationDropdownAbrreviate>
          </LocationDropdownLocation>
        ))}
      </LocationDropdownSearchResult>
    </LocationDropdownWrapper>
  );
};

export default LocationDropdown;
