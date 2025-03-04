import React, { useRef, useState } from "react";
import {
  TravelSection,
  TravelSectionTitle,
  TravelWrapper,
} from "./TravelRequirement.style";
import HeroSection from "../../components/hero/HeroSection";
import Button from "../../components/button/Button";
import {
  BodyContent,
  FormWrapper,
} from "../flight/flight_booking/FlightBooking.style";
import heroImage from "../../images/travel.png";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import Input from "../../components/inputs/input/Input";
import { ButtonWrapper, FormContent } from "../hotel/gues_info/GuestInfo.style";
import SelectInput from "../../components/inputs/selectInput/SelectInput";
import { TravelDocumentTypeList } from "../../data/object/TravelDocumentType";
import { useNavigate } from "react-router-dom";

function TravelRequirement() {
  // CLICK AND SCROLL TO General Reservation conditions
  const bodyRef = useRef(null);

  const handleBodyRef = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //  Input VARIABLES
  const [destination, setDestination] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [docType, setDocType] = useState("");
  const [country, setCountry] = useState("");
  const [transit, setTransit] = useState("");

  //  Input ERROR VARIABLES
  const [destinationError, setDestinationError] = useState(false);
  const [citizenshipError, setCitizenshipError] = useState(false);
  const [docTypeError, setDocTypeError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [transitError, setTransitError] = useState(false);

  // HANDLE INPUT ONCHANGE
  const handleDestination = (e) => {
    setDestination(e.target.value);
    setDestinationError(false);
  };

  const handleCitizenship = (e) => {
    setCitizenship(e.target.value);
    setCitizenshipError(false);
  };

  const handleDocType = (e) => {
    setDocType(e.target.value);
    setDocTypeError(false);
  };

  const handleCountary = (e) => {
    setCountry(e.target.value);
    setCountryError(false);
  };

  const handleTransit = (e) => {
    setTransit(e.target.value);
    setTransitError(false);
  };

  // HANLD FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (destination === "" || destination === null) {
      setDestinationError(true);
    } else if (citizenship === "" || citizenship === null) {
      setCitizenshipError(true);
    } else if (docType === "" || docType === null) {
      setDocTypeError(true);
    } else if (country === "" || country === null) {
      setCountryError(true);
    } else if (transit === "" || transit === null) {
      setTransitError(true);
    } else {
      alert("ALL GOOD");
    }
  };

  const navigate = useNavigate();

  return (
    <TravelWrapper>
      <HeroSection heroImage={heroImage}>
        <TravelSection>
          <TravelSectionTitle>
            <h4>Things you need to Know</h4>
            <h1>Travel Requirements</h1>
            <span>
              <Button
                onClick={() => handleBodyRef(bodyRef)}
                text={"Learn more"}
                rightIcon={<FaLongArrowAltDown />}
                bgColor={"transparent"}
                btnBorder={"2px solid white"}
              />
            </span>
          </TravelSectionTitle>
        </TravelSection>
      </HeroSection>

      <BodyContent ref={bodyRef}>
        <h2>Visa requirements</h2>
        <p>
          Before booking your flight with Manzo Airline, we recommend that you
          check the latest information on passport, visa, health, and customs
          requirements to ensure you have the required documents at the time of
          travel.
        </p>

        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <FormContent>
              {/* Last name */}
              <Input
                title={""}
                label={"Destination"}
                type={"text"}
                value={destination}
                onChange={handleDestination}
                error={destinationError}
                requiredSymbol={"*"}
              />

              {/* First name */}
              <Input
                type={"text"}
                title={""}
                label={"Citizenship"}
                value={citizenship}
                onChange={handleCitizenship}
                error={citizenshipError}
                requiredSymbol={"*"}
              />
            </FormContent>
            <FormContent>
              {/* Travel Document  */}
              <SelectInput
                label={"Travel Document"}
                options={TravelDocumentTypeList}
                title={"Travel Document"}
                error={docTypeError}
                onChange={handleDocType}
              />

              {/* Last name */}
              <Input
                title={""}
                label={"Country/region of residence"}
                type={"text"}
                value={country}
                onChange={handleCountary}
                error={countryError}
                requiredSymbol={"*"}
              />

              {/* First name */}
              <Input
                type={"text"}
                title={""}
                label={"Transit countries/region"}
                value={transit}
                onChange={handleTransit}
                error={transitError}
                requiredSymbol={"*"}
              />
            </FormContent>
            <ButtonWrapper>
              <Button text={"Submit"} />
            </ButtonWrapper>
          </FormWrapper>
        </form>

        <h2> Visas and other requirements</h2>
        <p>
          Before booking your flight with Manzo Airline, we recommend that you
          check the latest information on country/region travel restrictions as
          well as passport, visa, health and customs requirements.
        </p>

        <p>
          This information is provided by Manzo Airline as a courtesy. Although
          it is updated regularly, please check back frequently as travel
          conditions can change. It is recommended that you verify travel and
          entry requirements through independent inquiries before your trip.
        </p>

        <h2>Other requirements</h2>

        <h3>Visitors Entering Dubai</h3>
        <p>
          Visitors entering Dubai may be required to obtain visitor health
          insurance as part of the visa application process.
        </p>

        <p>
          For more information on how to get visitor health insurance, please
          visit{" "}
          <a href>
            Ministry of Public Health - Mandatory Health Insurance Scheme
          </a>
        </p>

        <h3>Useful Quic links</h3>

        <p>
          Passengers should check for up-to-date information published by
          relevant authorities and governments of their departure and
          destination country before travelling. Find out more through the links
          below:
        </p>
        <ul>
          <li>
            <a href="https://www.iatatravelcentre.com/international-travel-document-news/1580226297.htm">
              {" "}
              International Air Transport Association (IATA)
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html">
              {" "}
              Centers for Disease Control and Prevention
            </a>
          </li>
          <li>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              {" "}
              World Health Organisation
            </a>
          </li>
          <li>
            <a href="https://www.unwto.org/">
              United Nations World Tourism Organisation
            </a>
          </li>
        </ul>

        <div>
          <h3>Travel advisories</h3>
          <p>
            Stay up to date on the latest worldwide airport and flight
            operations.
          </p>
          <Button
            text={"Submit"}
            rightIcon={<FaLongArrowAltRight />}
            onClick={() => navigate("/")}
          />
        </div>
      </BodyContent>
    </TravelWrapper>
  );
}

export default TravelRequirement;
