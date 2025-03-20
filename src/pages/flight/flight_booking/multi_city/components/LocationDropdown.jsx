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
              setAirportSelected(`${item?.name}, ${item?.country}`);
              setCityCode(item?.code);
              onCloseDropdown();
            }}
          >
            <LocationDropdownTakeoff>
              <MdFlightTakeoff size={20} />
              <div>
                <p>
                  <b>{`${item?.state}, ${item?.country}`}</b>
                </p>
                <p>{`${item?.name}, ${item?.city}, ${item?.state}, ${item?.country}`}</p>
              </div>
            </LocationDropdownTakeoff>
            <LocationDropdownAbrreviate>
              {item?.code}
            </LocationDropdownAbrreviate>
          </LocationDropdownLocation>
        ))}
      </LocationDropdownSearchResult>
    </LocationDropdownWrapper>
  );
};

export default LocationDropdown;
