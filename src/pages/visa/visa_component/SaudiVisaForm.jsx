

import React, { useState } from 'react'
import FormWrapper from '../../../components/booking_icons/form_wrapper/FormWrapper'
import { ButtonWrapper, FormContent } from '../../flight/flight_customization/FlightCustomization.style'
import SelectInput from '../../../components/inputs/selectInput/SelectInput'
import Input from '../../../components/inputs/input/Input'
import RadioInput from '../../../components/inputs/input_radio/RadioInput'
import Button from '../../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import { Countries } from '../../../data/object/countries'
import FileInputs from '../../../components/inputs/file_inputs/FileInputs'
import { TbRubberStamp } from 'react-icons/tb'

export default function SaudiVisaForm({visaData, setVisaData, setShowSaudiVisa, setShowSaudiVisaData}) {
    const navigate = useNavigate();


    // Visa application variables
    const [name, setName]=useState('')
    const [selectedCountryValue, setSelectedCountryValue] = useState('');
    const [dob, setDob] = useState('');
    const [visaType, setVisaType] = useState('');
    const [entryType, setEntryType] = useState('');
    const [visaNo, setVisaNo] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [expDate, setExpDate] = useState('');
    const [passportNo, setPassportNo] = useState('');
    const [placeIssued, setPlaceIssued] = useState('');
    const [duration, setDuration] = useState('');
    const [passport, setPassport] = useState('')
    const [fileName, setFileName] = useState('');


   

    
    // error
    const [nameError, setNameError] = useState(false);
    const [nationalityError, setNationalityError] = useState(false);
    const [dobError, setDobError] = useState(false);
    const [visaTypeError, setVisaTypeError] = useState(false);
    const [entryTypeError, setEntryTypeError] = useState(false);
    const [visaNoError, setVisaNoError] = useState(false);
    const [issueDateError, setIssueDateError] = useState(false);
    const [expDateError, setExpDateError] = useState(false);
    const [passportNoError, setPassportNoError] = useState(false);
    const [placeIssuedError, setPlaceIssuedError] = useState(false);
    const [durationError, setDurationError] = useState(false);
    const [fileChangeError, setFileChangeError] = useState(false);
    

    const handleNameChange = (event) => {
      setName(event.target.value);
      setNameError(false);
    }

    const handleNationalChange = (event) => {
      setSelectedCountryValue(event.target.value);
      setNationalityError(false)
    }
    

    const handleDOb = (event) => {
      setDob(event.target.value);
      setDobError(false);
    }


    const handleVisaType = (event) => {
      setVisaType(event.target.value);
      setVisaTypeError(false);
    }


    const handleEntryType = (event) => {
      setEntryType(event.target.value);
      setEntryTypeError(false);
    }


    const handleVisaNo = (event) => {
      setVisaNo(event.target.value);
      setVisaNoError(false);
    }

    
    const handleIssueDate = (event) => {
      setIssueDate(event.target.value);
      setIssueDateError(false);
    }
    

    const handleExpDate = (event) => {
      setExpDate(event.target.value);
      setExpDateError(false);
    }


    const handlePassportNo = (event) => {
      setPassportNo(event.target.value);
      setPassportNoError(false);
    }


    const handlePlaceIssued = (event) => {
      setPlaceIssued(event.target.value);
      setPlaceIssuedError(false);
    }


    const handleDuration = (event) => {
      setDuration(event.target.value);
      setDurationError(false);
    }


    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setFileName(file ? file.name : '');
    };

// OnSubmit handler
const handledSubmit = (e)=>{

  e.preventDefault();

   // last name validation
   if (name === "" || null) {
    setNameError(true);
  }else
    // first name validation
    if (selectedCountryValue === "" || null) {
      setNationalityError(false);
    }else
  // dob validation
  if (dob === "" || null) {
    setDobError(true);
  }else
  
   // country  validation
   if (visaType === "" || null) {
    setVisaTypeError(true);
  }else
  
  // Gender  validation
  if(entryType === "" || null){
    setEntryTypeError(true);
  }else
  
  // phone validation
  if (visaNo === "" || null) {
    setVisaNoError(true);
  }else
  
  if (passportNo === "" || null) {
    setPassportNoError(true);
  }else 
  
  if (placeIssued === "" || null) {
    setPlaceIssuedError(true);
  }else 
  
  if (duration === "" || null) {
    setDurationError(true);
  }else
  // email validation
  if (issueDate === "" || null) {
    setIssueDateError(true);
  }else  
      // email validation
  if (expDate === "" || null) {
    setExpDateError(true);
  }else

  if(fileName === "" || null){
    setFileName(true);
  } 
  else if(visaData === "" || visaData === null){
      return  null;
  }else{
        // You can also reset form or perform other actions here
    setVisaData({
      name: name,
      selectedCountryValue : selectedCountryValue,
      dob: dob,
      visaType: visaType,
      entryType: entryType,
      visaNo: visaNo,
      issueDate: issueDate,
      expDate: expDate,
      passportNo: passportNo,
      placeIssued: placeIssued,
      duration: duration,
  })

  setShowSaudiVisa(false)
  setShowSaudiVisaData(true);
  }
    

}

  return (
    <div>
        {/* Form */}
        <form onSubmit={handledSubmit}>
 <FormWrapper bgColor={'white'} >
                    <FormContent>
                                        
                      {/* Name */}
                        <Input
                            title={'Name'}
                            label={'Name'}
                            type={'text'}
                            value={name}
                            onChange={handleNameChange}
                            error={nameError}
                            requiredSymbol={'*'}
                          />           
                          
                    {/* Countries */}
                        <SelectInput 
                          options={Countries} 
                          title={'Nationality'} 
                          error={nationalityError} 
                          onChange={handleNationalChange}
                      />

                          {/* Date of Birth */}
                        <Input
                            type={'date'}
                            title={'Date of Birth'}
                            label={'Date of Birth'}
                            value={dob}
                            onChange={handleDOb}
                            error={dobError}
                            requiredSymbol={'*'}
                          />
                    </FormContent>

                    <FormContent>                    
                      {/* Visa Type */}
                      <Input
                            type={'text'}
                            title={'Visa Type'}
                            label={'Visa Type'}
                            value={visaType}
                            onChange={handleVisaType}
                            error={visaTypeError}
                            requiredSymbol={'*'}
                          />

                          {/* Entry Type */}
                     <Input
                            title={'Entry Type'}
                            label={'Entry Type'}
                            type={'text'}
                            value={entryType}
                            onChange={handleEntryType}
                            error={entryTypeError}
                            requiredSymbol={'*'}
                          />

                          {/* Visa Number */}
                        <Input
                                title={'Visa Number'}
                                label={'Visa Number'}
                                type={'text'}
                                value={visaNo}
                                onChange={handleVisaNo}
                                error={visaNoError}
                                requiredSymbol={'*'}
                              />  

                    </FormContent>
                    
                    <FormContent>
                  {/* Passport Number */}
                    <Input
                            title={'Passport Number'}
                            label={'Passport Number'}
                            type={'text'}
                            value={passportNo}
                            onChange={handlePassportNo}
                            error={passportNoError}
                            requiredSymbol={'*'}
                          />
                          
                   
                    {/* Place Issued */}
                        <Input
                            title={'Place Issued'}
                            label={'Place Issued'}
                            type={'text'}
                            value={placeIssued}
                            onChange={handlePlaceIssued}
                            error={placeIssuedError}
                            requiredSymbol={'*'}
                          />   


                      {/* Duration*/}
                      <Input
                            title={'Duration'}
                            label={'Duration'}
                            type={'text'}
                            value={duration}
                            onChange={handleDuration}
                            error={durationError}
                            requiredSymbol={'*'}
                           />       
                    </FormContent>
                    <FormContent>
                  {/* Issue Date */}
                    <Input
                            title={'Issue Date'}
                            label={'Issue Date'}
                            type={'date'}
                            value={issueDate}
                            onChange={handleIssueDate}
                            error={issueDateError}
                            requiredSymbol={'*'}
  
                          />
                          
                  
                     {/* Ep Date */}
                        <Input
                            title={'Exp Date'}
                            label={'Exp Date'}
                            type={'date'}
                            value={expDate}
                            onChange={handleExpDate}
                            error={expDateError}
                            requiredSymbol={'*'}
                          /> 

                        {/* Upload passport */}
                          <FileInputs
                            id={'passport'}
                            onChange={()=>{}}
                            title={'Visa Passport'}
                            label={'Upload passport'}
                           
                          />
                    </FormContent>

                    {/* Continue Button */}
                  <ButtonWrapper>
                    <div>
                      <input type="checkbox" name="terms" id="terms" />
                      <p>By proceeding you agree have read and accept our <a href='#'>Terms and Conditions</a></p>
                    </div>
                    <Button text={"Continue"} />
                    </ButtonWrapper>  
                </FormWrapper>
        </form>
       
    </div>
  )
}
