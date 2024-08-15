

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { EarnPointCard, ResultCounter, ResultCounterLeft, ResultSidebar, SideBarContent, TaxiResultContent, TaxiResultHeader, TaxiResultMain, TaxiResultWrapper } from '../TaxiResult.style';
import TaxiForm from '../../../../components/taxi/TaxiForm';
import SidebarItems from '../../../../components/hotel_components/sidebar_items/SidebarItems';
import { CabClassList, CabTypeList, TaxiDropOffResultList, TaxiResultList } from '../../../../data/object/TaxiResultList';
import TaxiResultCard from '../../../../components/taxi/taxi_result_card/TaxiResultCard';
import TaxiPicture from '../../../../images/cab.png'
import { FaLocationDot } from 'react-icons/fa6';
import { MdFlightTakeoff } from 'react-icons/md';



export default function TaxiDropOffResult() {


    const today = new Date().toISOString().split('T')[0];
    // Initialize the default time value (e.g., 08:30)
     const defaultTime = '08:30';
    
// Taxi form Reservation Variable Declarations:

const navigate = useNavigate();
 

// Taxi form Reservation Variable Declarations:

   // roundTrip is selected by default
 
   const [dropOff, setDropOff] =useState('Nnamdi Azikiwe Internatianal...')
   const [pickup, setPickup] =useState('Garki, Abuja')
   const [pickupDate, setPickupDate] = useState(today);
   const [pickupTime, setPickupTime] = useState(defaultTime);
   const [passenger, setPassenger] = useState(10);
   const [showTaxiInputs, setShowTaxiInputs] = useState(false)
   const[showRadioButton, setShowRadioButton] = useState(false)



   // passenger count event handler Event handler

   const handleDroppOff = (e) =>{
    setDropOff(e.target.value)
}


const handlePickup = (e) =>{
  setPickup(e.target.value)
}

   const handlePickupDate = (e)=>{
     setPickupDate(e.target.value)
   }


   const handlePickupTime = (e)=>{
    setPickupTime(e.target.value)
   }


     // DROPDOWN LOCATION AND DESTINATION AIRPORTS 
   const pickUpAirportList= [
     {
       airportAddress: 'Lagos, Nigeria',
       airportName: 'Murtala Muhammad Internatinal Airport',
       airportAbbreviation: 'LOS'   
   },
     {
         airportAddress: 'Abuja, Nigeria',
         airportName: 'Nnamdi Azikwe Internatinal Airport',
         airportAbbreviation: 'ABV'   
     },
     
   ]


 

   const dropLocationList  = [
        {
          airportAddress: 'Gwarimpa District',
          airportName: '3rd Avenue Gwarimpa',
          airportAbbreviation: ''   
      },
        {
            airportAddress: 'Garki International Market',
            airportName: 'Damaturu Crescent, Abuja, Nigeria',
            airportAbbreviation: ''   
        },
        
      ]
   


     const [searchdropoffInputValue, setSearchdropoffInputValue] =useState('')
     const [searchpickupInputValue, setSearchpickupInputValue] =useState('')

     // TakeOff Search airport handler

           //PICKUP AIRPORT Search airport handler
           const  onChangePickupHanlder =(e)=>{
            setSearchpickupInputValue(e.target.value);
    
          }

      const  onChangeDropoffHandler =(e)=>{
        setSearchdropoffInputValue(e.target.value);

      }

     // show/hide takeoff and destination down airport Lists


     const [showPickupLocation,  setShowPickupLocation] = useState(false)
     const [showDropOffLocation,  setShowDropOffLocation] = useState(false)
    
     

 

     const onCloseDroppOffDropdwon = () =>{
        setShowDropOffLocation(false)
      }

      
     const onClosePickupDropdown = () =>{
      setShowPickupLocation(false)
    }

     // show/hide TaxiInputs
     const handleShowPickupTaxiInputs = ()=>{
      setShowPickupLocation(!showPickupLocation)
      setShowRadioButton(true)
      setShowTaxiInputs(true)
   }

     const handleShowDroppoffTaxiInputs = ()=>{
        setShowDropOffLocation(!showDropOffLocation)
        setShowRadioButton(true)
        setShowTaxiInputs(true)
     }



   const handlePassengerIncrement = (type) => {
    if (type === "passenger" && passenger < 50) {
          setPassenger(passenger + 1);
    }
  };

  const handlePassengerDecrement = (type) => {
    if (type === "passenger" && passenger > 1) {
      setPassenger(passenger - 1);
}
  };

    const [showPassenger, setShowPassenger] = useState(false)
    const [values, setValues] = useState([]);
  
   

// Radio button variables

          
const[taxiType, setTaxiType] = useState('');

           
const [fromAirport, setFromAirport] = useState('Pick-up Airport');
const [faBrColor, setFaBrColor] = useState('grey')
const [faCheckColor, setFaCheckColor] = useState('white')


const [toAirport, setToAirport] = useState('Drop-Off Airport');
const [toBrColor, setToBrColor] = useState('#2563eb')
const [toCheckColor, setToCheckColor] = useState('#2563eb')

const [ showFromAirportForm, setShowFromAirportForm] = useState(false)
const [ showToAirportForm, setShowToAirportForm] = useState(true)

const handleFromAirport = ()=>{
    setTaxiType(fromAirport);
    setShowFromAirportForm(true)
    setShowToAirportForm(false)
    setFaBrColor('#2563eb');
    setFaCheckColor('#2563eb');  
    setToBrColor('grey');
    setToCheckColor('white');           
}

const handleToAirport = ()=>{
    setTaxiType(toAirport);
    setShowFromAirportForm(false)
    setShowToAirportForm(true)
    setToBrColor('#2563eb');
    setToCheckColor('#2563eb');  
    setFaBrColor('grey');
    setFaCheckColor('white'); 
}





  return (
    <TaxiResultWrapper>
          <TaxiResultHeader>
        <p>
            50 cabs found for <span>Taxi</span> services 

        </p>
      </TaxiResultHeader>

      {/* Taxi Editing form */}
                   {/* Taxi Form */}  
       
                      <TaxiForm
                      // Pick-up
                      pickup={pickup}
                      setPickup={setPickup}   
                      handlePickup={handlePickup}
                      showPickupLocation={showPickupLocation}
                      handleShowPickupTaxiInputs={handleShowPickupTaxiInputs}
                      pickUpAirportList={pickUpAirportList}
                      searchpickupInputValue={ searchpickupInputValue}  
                      onChangePickupHanlder ={onChangePickupHanlder}  
                      onClosePickupDropdown = {onClosePickupDropdown}

                        // Drop Off
                            dropOff={dropOff}
                            setDropOff={setDropOff}   
                            handleDroppOff={handleDroppOff}
                            showDropOffLocation={showDropOffLocation}
                            handleShowDroppoffTaxiInputs={handleShowDroppoffTaxiInputs}
                            dropLocationList={dropLocationList}
                            searchdropoffInputValue={ searchdropoffInputValue}  
                            onChangeDropoffHandler ={onChangeDropoffHandler}  
                            onCloseDroppOffDropdwon = {onCloseDroppOffDropdwon}  
                                                       
                            showTaxiInputs={showTaxiInputs}
                            
                            // pickup date
                            handlePickupDate={handlePickupDate}
                            pickupDate={pickupDate}
                           
                            //  pickup time
                            pickupTime={pickupTime}
                            handlePickupTime={handlePickupTime}

                            // Passenger
                            setShowPassenger={setShowPassenger}
                            showPassenger={showPassenger}
                            passenger={passenger}
                            handlePassengerDecrement={handlePassengerDecrement}                     
                            handlePassengerIncrement={handlePassengerIncrement}  

                            showRadioButton={showRadioButton}
                            handleButtonClick={()=>navigate('/Taxi-result')}
                            
                             // checkbutton variables
                            fromAirport={fromAirport}
                            faBrColor={faBrColor}
                            faCheckColor={faCheckColor}
                            handleFromAirport={handleFromAirport}

                            toAirport={toAirport}
                            toBrColor={toBrColor}
                            toCheckColor={toCheckColor}
                            handleToAirport={handleToAirport}

                            showFromAirportForm={showFromAirportForm}
                            showToAirportForm={showToAirportForm}
                            
                      />  
      <TaxiResultContent>

{/* SideBar */}
<ResultSidebar>         

 
 
  {values.map((item)=>(
    <span>{item}</span>
  ))}
  {/* Taxi */}
  <SideBarContent>
    <h3>Taxi Type</h3>
     { 
      CabTypeList.map((item, i)=>(
       <SidebarItems 
          key={i} 
          value={item.title}
          setValue={setValues}
          counter={item.counter}
        />
      ))
      }
  </SideBarContent>
 

{/*   
  {/* Taxi Class */}
  <SideBarContent>
    <h3>Taxi Class</h3>
     { 
      CabClassList.map((item, i)=>(
       <SidebarItems 
          key={i} 
          value={item.title}
          counter={item.counter}
        />
      ))
      }
  </SideBarContent> 

</ResultSidebar>



{/* Main Content */}
<TaxiResultMain>
          {/* Counter Summary */}
          <ResultCounter>
              <EarnPointCard bg={TaxiPicture}>
                <div>
                  <h3>Earn 1 Manzo Points per N5,000 spent</h3>
                  <span>You need to provide Manzo Travel membership number during or after booking.</span>
                  <a href="">See promotion details</a>
                </div>
              </EarnPointCard>

              <ResultCounterLeft>
              <h3>Abuja:</h3>
              <p>30 Cabs Found.</p>
            </ResultCounterLeft>
          </ResultCounter>

{/* Taxi RESULTS */}
{
  TaxiDropOffResultList.map((item, i)=>(
    <TaxiResultCard
    key={i}
    picture={item.picture}
    title={item.title}
    recommended={item.recommended}
    taxiPolicies={item.taxiPolicies}
    refunds={item.refunds}
    cancellation={item.cancellation}
    cancellationFee={item.cancellationFee}
    pickupDate={item.pickupDate}
    pickupTime={item.pickupTime}
    NoOfPassenger={item.NoOfPassenger}
    AirCondition={item.AirCondition}
    grade={item.grade}
    reviewCounter={item.reviewCounter}
    rating={item.rating}
    price={item.price}
    taxes={item.taxes}
    taxiLink={()=>navigate(item.taxiLink)}
    />
  ))

}
</TaxiResultMain>


      </TaxiResultContent>
    </TaxiResultWrapper>
  )
}






