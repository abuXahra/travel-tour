

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdFlightTakeoff } from 'react-icons/md'
import { FaSearchStyled, LocationDropdownAbrreviate, LocationDropdownInput, LocationDropdownLocation, LocationDropdownSearchResult, LocationDropdownTakeoff, LocationDropdownWrapper, MdFlightTakeoffStyled } from './LocationDropdown.style'

export default function LocationDropdown({onChange, items, searchInputValue, setAirportSelected, onCloseDropdwon, Icon}) {
  
    
  

    return (
    <LocationDropdownWrapper>
        <LocationDropdownInput>

        <FaSearchStyled />
        <input type="text" placeholder='search...' value={searchInputValue} onChange={onChange} />
        </LocationDropdownInput>

        <LocationDropdownSearchResult>
            <h3>Recent Search</h3>

    {
        items?.map((item, i)=>(
             
             <LocationDropdownLocation key={i} bottomBorder={''} onClick={()=>{setAirportSelected(item.airportAddress); onCloseDropdwon()}}>
                <LocationDropdownTakeoff>
                <MdFlightTakeoffStyled>{Icon}</MdFlightTakeoffStyled>
                <div>
                    <p><b>{item.airportAddress}</b></p>
                    <p>{item.airportName}</p>
                </div>
                </LocationDropdownTakeoff>
                <LocationDropdownAbrreviate>
                    {item.airportAbbreviation}
                </LocationDropdownAbrreviate>
            </LocationDropdownLocation>

        ))
    }
        </LocationDropdownSearchResult>
    </LocationDropdownWrapper>
  )
}



















































// import React, { useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import { MdFlightTakeoff } from 'react-icons/md'
// import { FaSearchStyled, LocationDropdownAbrreviate, LocationDropdownInput, LocationDropdownLocation, LocationDropdownSearchResult, LocationDropdownTakeoff, LocationDropdownWrapper, MdFlightTakeoffStyled } from './LocationDropdown.style'

// export default function LocationDropdown({value, onChange, items, airportAddress, airportName, airportAbbreviation}) {
  
//     const [inputValue, setInputValue] = useState('');

//     const [airportSelected, setAirportSelected] = useState('')

//     const onChangeValueHandler = (e)=>{
//         setInputValue(e.target.value);
//     }

// const takeOffList = [
//         {
//             airportAddress: 'Abuja, Nigeria',
//             airportName: 'Nnamdi Azikwe Internatinal Airport',
//             airportAbbreviation: 'ABV'   
//         },
//         {
//             airportAddress: 'Abuja, Nigeria',
//             airportName: 'Nnamdi Azikwe Internatinal Airport',
//             airportAbbreviation: 'ABV'   
//         },
//         {
//             airportAddress: 'Abuja, Nigeria',
//             airportName: 'Nnamdi Azikwe Internatinal Airport',
//             airportAbbreviation: 'ABV'   
//         },
//         {
//             airportAddress: 'Abuja, Nigeria',
//             airportName: 'Nnamdi Azikwe Internatinal Airport',
//             airportAbbreviation: 'ABV'   
//         },
//         {
//             airportAddress: 'Abuja, Nigeria',
//             airportName: 'Nnamdi Azikwe Internatinal Airport',
//             airportAbbreviation: 'ABV'   
//         }
//     ]

//     return (
//     <LocationDropdownWrapper>
//         <LocationDropdownInput>

//         <FaSearchStyled />
//         <input type="text" placeholder='search...' value={airportSelected} onChange={onChangeValueHandler}/>
//         </LocationDropdownInput>

//         <LocationDropdownSearchResult>
//             <h3>Recent Search</h3>

//             {/* <LocationDropdownLocation bottomBorder={''}>
//                 <LocationDropdownTakeoff>
//                 <MdFlightTakeoffStyled/>
//                 <div>
//                     <p><b>Abuja, Nigeria</b></p>
//                     <p>Nnamdi Azikwe Airp...</p>
//                 </div>
//                 </LocationDropdownTakeoff>
//                 <LocationDropdownAbrreviate>
//                     ABV
//                 </LocationDropdownAbrreviate>
//             </LocationDropdownLocation> */}

//     {
//         takeOffList.map((item, i)=>(
             
//              <LocationDropdownLocation key={i} bottomBorder={''} onClick={()=>setAirportSelected(item.airportName)}>
//                 <LocationDropdownTakeoff>
//                 <MdFlightTakeoffStyled/>
//                 <div>
//                     <p><b>{item.airportAddress}</b></p>
//                     <p>{item.airportName}</p>
//                 </div>
//                 </LocationDropdownTakeoff>
//                 <LocationDropdownAbrreviate>
//                     {item.airportAbbreviation}
//                 </LocationDropdownAbrreviate>
//             </LocationDropdownLocation>

//         ))
//     }
//         </LocationDropdownSearchResult>
//     </LocationDropdownWrapper>
//   )
// }






