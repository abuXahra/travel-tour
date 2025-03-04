import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseIcon,
  ClosePopup,
  H3Styled,
  HRStyled,
  //  Section,
  VisaBody,
  //  VisaContentWrapper,
  VisaFormSection,
  VisaFormSectionContent,
  VisaFormSectionTitle,
  VisaWrapper,
} from "./Visa.style";
import FormWrapper from "../../components/booking_icons/form_wrapper/FormWrapper";
// import { MdFlightTakeoff } from "react-icons/md";
import HeroSection from "../../components/hero/HeroSection";
import GeneralHeaders from "../../components/booking_icons/book_sub_header/booking_general_headers/GeneralHeaders";

import heroImage from "../../images/visa2.jpg";
import { PopupContent, PopupWrapper } from "../../components/popup/Popup.style";
import Button from "../../components/button/Button";
import VisaForm from "./visa_component/visa_form/saudi_form/VisaForm";
import {
  // FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import SaudiVisaForm from "./visa_component/SaudiVisaForm";
import UserVisaData from "../../components/visa/UserVisaData";
// import { FaBullseye } from 'react-icons/fa6';
import Content from "../../components/homepage_content/Content";

export default function Visa() {
  const navigate = useNavigate();

  const [showSaudiVisa, setShowSaudiVisa] = useState(false);
  const [showSaudiVisaData, setShowSaudiVisaData] = useState(false);
  const [showOtherVisa, setShowOtherVisa] = useState(false);

  const [visaData, setVisaData] = useState([]);
  return (
    <VisaWrapper>
      {/* hero section with form */}
      <HeroSection heroImage={heroImage}>
        {/* flight form section */}
        <VisaFormSection sectionHeight={"auto"}>
          {/* flight form section  title */}
          <VisaFormSectionTitle>
            <h4>Require Visa for your trip?</h4>
            <h1>Begin your visa application here</h1>
          </VisaFormSectionTitle>

          {/* flight form section content */}
          <VisaFormSectionContent>
            {/* Headers */}
            <GeneralHeaders />

            {/* Visa Form */}
            <FormWrapper>
              <VisaForm
                handleOtherVisaForm={() => setShowOtherVisa(true)}
                handleShowSaudVisaForm={() => setShowSaudiVisa(true)}
              />
            </FormWrapper>
          </VisaFormSectionContent>
        </VisaFormSection>
      </HeroSection>

      {/* Visa Body */}
      <VisaBody>
        <Content />
      </VisaBody>

      {/* Saudi Arabia Visa*/}
      {showSaudiVisa && (
        <PopupWrapper alignItems={"start"}>
          <PopupContent wd="70%">
            <ClosePopup onClick={() => setShowSaudiVisa(false)}>
              <CloseIcon />
            </ClosePopup>
            <H3Styled>Saudi Visa Application form</H3Styled>
            <HRStyled />
            <SaudiVisaForm
              visaData={visaData}
              setVisaData={setVisaData}
              setShowSaudiVisa={setShowSaudiVisa}
              setShowSaudiVisaData={setShowSaudiVisaData}
            />
          </PopupContent>
        </PopupWrapper>
      )}

      {/* Saudi Application User Data */}
      {showSaudiVisaData && (
        <PopupWrapper alignItems={"start"}>
          <PopupContent wd="70%">
            <ClosePopup onClick={() => setShowSaudiVisaData(false)}>
              <CloseIcon />
            </ClosePopup>
            <H3Styled>Saudi Visa Application Data</H3Styled>
            <HRStyled />
            <UserVisaData
              name={visaData.name}
              selectedCountryValue={visaData.selectedCountryValue}
              dob={visaData.dob}
              visaType={visaData.visaType}
              entryType={visaData.entryType}
              visaNo={visaData.visaNo}
              issueDate={visaData.issueDate}
              expDate={visaData.expDate}
              passportNo={visaData.passportNo}
              placeIssued={visaData.placeIssued}
              duration={visaData.duration}
              handleButtonClick={() => navigate("/visa-overview")}
            />
          </PopupContent>
        </PopupWrapper>
      )}

      {/* Other Country Visa */}
      {showOtherVisa && (
        <PopupWrapper>
          <PopupContent wd="30%">
            <ClosePopup onClick={() => setShowOtherVisa(false)}>
              <CloseIcon />
            </ClosePopup>
            <h3>Other Country Visa</h3>
            <p style={{ fontSize: "13px", lineHeight: "20px" }}>
              Continue your other country visa application with our online
              agents{" "}
            </p>
            <div>
              <Button
                text={"Chat with agent"}
                Icon={<FaWhatsapp />}
                onClick={() => {
                  navigate("/hotel-reservation");
                }}
              />
            </div>
          </PopupContent>
        </PopupWrapper>
      )}
    </VisaWrapper>
  );
}
