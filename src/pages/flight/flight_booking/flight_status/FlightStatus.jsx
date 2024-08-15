


import React, { useState } from 'react'
import { DestinationWrapper, FlightDepartWrapper, FlightDepatWrapContent, FlightForm, FlightInputAndDropDown, FlightInputContainer, FlightInputWrapper, FlightType, Label, RadioCheck, RadioItem, RadioItemWrapper, RoundTripImg, TakeOffWrapper } from '../FlightBooking.style'
import { FaCircle } from 'react-icons/fa'
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
import LocationDropdown from '../../../../components/booking_icons/location_dropdow/LocationDropdown';
import roundtrip from '../../../../images/svg-icon/flight-return-round-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper } from '../stop_over/StopOver.style';
import Button from '../../../../components/button/Button';
import { FlightStatusBtn } from './FlightStatus.style';
import FlightInput from '../../../../components/booking_icons/FlightInput';

export default function FlightStatus() {


    const navigate = useNavigate();
          
    // roundTrip is selected by default
    const [kickOff, setKickOff] = useState();
    const [destination, setDestination] = useState();
    const [departDate, setDepartDate] = useState();
    const [flightNumberValue, setFlightNumberValue] = useState();
  

    const [showFlightInputs, setshowFlightInputs] = useState(false)
    const [showFlightStatus, setShowFlightStatus] = useState(false)
    const [showFlightRouteForm, setShowFlightRouteForm] = useState(true);
    const [showFlightNumberForm, setShowFlightNumberForm] = useState(false);


    // passange count event handler Event handler
    const handleKickOff = (e)=>{
      setKickOff(e.target.value);
    }

    const handleDestination = (e) =>{
        setDestination(e.target.value)
    }

    const handleDepartureDate = (e)=>{
      setDepartDate(e.target.value)
    }



    const flightNumberHandler = (e)=>{
        setFlightNumberValue(e.target.value)
      }
  


     

      // DROPDOWN LOCATION AND DESTINATION AIRPORTS 

      
    const takeOffAportList = [
      {
          airportAddress: 'Abuja, Nigeria',
          airportName: 'Nnamdi Azikwe Internatinal Airport',
          airportAbbreviation: 'ABV'   
      },
      {
          airportAddress: 'Lagos, Nigeria',
          airportName: 'Murtala Muhammad Internatinal Airport',
          airportAbbreviation: 'LOS'   
      },
      
    ]


    const destinationAriporList = [
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



      const [searchTakeOffInputValue, setSearchTakeOffInputValue] = useState(''); 
      const [searchDestinationInputValue, setSearchDestinationInputValue] = useState(''); 


      // TakeOff Search airport handler
      const onChangeTakeOffHandler = (e)=>{
        setSearchTakeOffInputValue(e.target.value);
      }


            // destionaton Search airport handler
        const onChangeDestinationHandler = (e)=>{
              setSearchDestinationInputValue(e.target.value);
            }

      const [takeOffAirport, setTakeOffAirport] = useState('')
      const [destinationAirport, setDestinationAirport] = useState('')

      // show/hide takeoff and destination down airport Lists
      const [showTakeOffAirports, setShowTakeOffAirports] = useState(false)
      const [showDestinationAirports, setShowDestinationAirports] = useState(false)

      const onCloseTakOffDropdwon = () =>{
        setShowTakeOffAirports(false)
      }

      
      const onCloseDestinationDropdwon = () =>{
        setShowDestinationAirports(false)
      }


      // show/hide flightInputs
     
      const handleShowFlightInputsA = ()=>{
        setShowTakeOffAirports(!showTakeOffAirports)
        setshowFlightInputs(true)
        setShowFlightStatus(true)
      }

      const handleShowFlightInputsB = ()=>{
        setShowDestinationAirports(!showDestinationAirports)
        setshowFlightInputs(true)
        setShowFlightStatus(true)
      }


    

// FOR STOP OVER ROUND AND ONEWAY TRIP
            const [flightStatus, setFlightStatus] = useState();
            const [flightNumber, setFlightNumber] = useState('Flight Number');
            const [route, setRoute] = useState('Route');
           


        const [routeBrColor, setRouteBrColor] = useState('#2563eb')
        const [routeCheckColor, setRouteCheckColor] = useState('#2563eb')

        const [flightNumberBrColor, setFlightNumberBrColor] = useState('grey')
        const [flightNumberCheckColor, setFlightNumberCheckColor] = useState('white')


        // Rodio Button Handler
            const handleRoute = ()=>{
                setFlightStatus(route);
                setShowFlightRouteForm(true)
                setShowFlightNumberForm(false)
                setRouteBrColor('#2563eb');
                setRouteCheckColor('#2563eb');
                setFlightNumberBrColor('grey');
                setFlightNumberCheckColor('white');
                
            }
    
            const handleFlightNumber = ()=>{
                setFlightStatus(flightNumber);
                setShowFlightRouteForm(false)
                setShowFlightNumberForm(true)
                setRouteBrColor('grey');
                setRouteCheckColor('white');
                setFlightNumberBrColor('#2563eb');
                setFlightNumberCheckColor('#2563eb');
          }
         
          


                  
    // FOR DEPARTURE AND RETURN STOP OVER

    const[statusType, setStatusType] = useState();

    const [departure, setDeparture] = useState('Departure');
    const [arrival, setArrival] = useState('Arrival');

    const [dBrColor, setDBrColor] = useState('#2563eb')
    const [dCheckColor, setDCheckColor] = useState('#2563eb')

    const [aBrColor, setABrColor] = useState('grey')
    const [aCheckColor, setACheckColor] = useState('white')

    const handleDeparture = ()=>{
        setStatusType(departure);
        setDBrColor('#2563eb');
        setDCheckColor('#2563eb');  
        setABrColor('grey')
        setACheckColor('white')              
    }

    const handleArrival = ()=>{
        setStatusType(arrival);
        setABrColor('#2563eb');
        setACheckColor('#2563eb');  
        setDBrColor('grey')
        setDCheckColor('white')
  }




  return (
   
        <form action="">

{ showFlightStatus &&             
      <FlightType mb={"10px"}>
                  
                 {/* Flight Status Type */}
    <RadioItemWrapper onClick={handleRoute}>
                    <RadioItem brColor={routeBrColor}>
                      <RadioCheck checkColor={routeCheckColor}>
                        <FaCircle />
                      </RadioCheck>
                    </RadioItem>
                    <label>{route}</label>
                  </RadioItemWrapper>
           
        
                  <RadioItemWrapper onClick={handleFlightNumber}>
                    <RadioItem brColor={flightNumberBrColor}>
                      <RadioCheck checkColor={flightNumberCheckColor}>
                        <FaCircle />
                      </RadioCheck>
                    </RadioItem>
                    <label>{flightNumber}</label>
                  </RadioItemWrapper>
                </FlightType>}
{/* search by route form */}
      { showFlightRouteForm &&
         <FlightForm>


         <FlightInputContainer>  
          {/* takeoff input */}
          <FlightInputAndDropDown>
               <FlightInputWrapper  onClick={handleShowFlightInputsA}>
             <input type="text" placeholder="From" value={takeOffAirport} onChange={handleKickOff} />
               <span><MdFlightTakeoff/></span>                  
              </FlightInputWrapper>
   
                 {/*  Takeoff Airport Dropdown*/}
                 {   
              showTakeOffAirports && 
               <TakeOffWrapper>
                   <LocationDropdown
                     onChange={onChangeTakeOffHandler}
                     items={takeOffAportList} 
                     searchInputValue={searchTakeOffInputValue}  
                     setAirportSelected={setTakeOffAirport}
                     onCloseDropdwon={onCloseTakOffDropdwon }
                     Icon={<MdFlightTakeoff/>}
                   />
                 </TakeOffWrapper>}
         </FlightInputAndDropDown>
   
               <RoundTripImg><img src={roundtrip}  alt='trip icon'/></RoundTripImg>   
   
                {/*Destination input  */}
             <FlightInputAndDropDown>                      
                   <FlightInputWrapper onClick={handleShowFlightInputsB}>
                   <input type="text" placeholder="To" value={destinationAirport} onChange={handleDestination} />
                   <span><MdFlightLand/></span>
               </FlightInputWrapper>
   
            {/* dropdown */}
               {                
                showDestinationAirports && 
               <DestinationWrapper>
                     <LocationDropdown
                         onChange={onChangeDestinationHandler}
                         items={destinationAriporList} 
                         searchInputValue={searchDestinationInputValue}  
                         setAirportSelected={setDestinationAirport}
                         onCloseDropdwon={onCloseDestinationDropdwon}
                         Icon={<MdFlightLand/>}
                     />
                 </DestinationWrapper>}
             </FlightInputAndDropDown>
         </FlightInputContainer>

         
         
{/* <!-- Depature and destination container --> */}
            {showFlightStatus && 
             
           <>  <FlightDepartWrapper>
                    <FlightDepatWrapContent contWidth={"46.5%"}>
                              <Label for="depart">Departing</Label>
                              <input type="date" id="depart" onChange={handleDepartureDate} value={departDate} />
                      </FlightDepatWrapContent>

                      {/* <FlightDepatWrapContent >
                      </FlightDepatWrapContent> */}
                </FlightDepartWrapper>
            
                
                    <ButtonWrapper justify={'space-between'}>
                    <FlightType>
                            <RadioItemWrapper onClick={handleDeparture}>
                                <RadioItem brColor={dBrColor}>
                                <RadioCheck checkColor={dCheckColor}>
                                    <FaCircle />
                                </RadioCheck>
                                </RadioItem>
                                <label>{departure}</label>
                            </RadioItemWrapper>
                    

                            <RadioItemWrapper onClick={handleArrival}>
                                <RadioItem brColor={aBrColor}>
                                <RadioCheck checkColor={aCheckColor}>
                                    <FaCircle />
                                </RadioCheck>
                                </RadioItem>
                                <label>{arrival}</label>
                            </RadioItemWrapper>
                            </FlightType>
                            <FlightStatusBtn>
                                <Button onClick={()=>navigate('/flight-result')} text={'Search Flight'} />
                            </FlightStatusBtn>
         
                     </ButtonWrapper> 
                     </> } 
         </FlightForm>
}
           {/*  search with flight number content*/} 
       {showFlightNumberForm && 
       <FlightForm>          
             <FlightDepartWrapper>
                    <FlightDepatWrapContent>
                        <FlightInput
                                title={'MZ Flight Number'}
                                value={flightNumberValue} 
                                onChange={flightNumberHandler}
                                type={'text'}
                                label={'Flight No.'}
                            />
                      </FlightDepatWrapContent>

                      <FlightDepatWrapContent>
                      <FlightDepatWrapContent contWidth={"100%"}>
                              <Label for="depart">Departing</Label>
                              <input type="date" id="depart" onChange={handleDepartureDate} value={departDate} />
                      </FlightDepatWrapContent>
                      </FlightDepatWrapContent>
                </FlightDepartWrapper>
              <ButtonWrapper justify={'flex-end'}>
                    <Button onClick={()=>navigate('/flight-result')} text={'Search Flight'} />
                </ButtonWrapper>     

        </FlightForm>      }   

        </form>
  )
}









