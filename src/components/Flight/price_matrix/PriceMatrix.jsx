import React, { useRef, useState, useEffect } from "react";
import {
  TableWrapper,
  TableContainer,
  StickyCol,
  ScrollableContent,
  TableStyle,
  NavButton,
} from "./PriceMatrix.style";

import airfrance from "../../../images/logos/airfrance.gif";
import egyptair from "../../../images/logos/egypt_air.gif";
import emirate from "../../../images/logos/emirate_air.gif";
import royal from "../../../images/logos/royal_air.gif";
import BA from "../../../images/logos/BA.gif";
import ET from "../../../images/logos/ET.gif";
import QR from "../../../images/logos/QR.gif";
import TK from "../../../images/logos/TK.gif";
import VS from "../../../images/logos/VS.gif";
import MA from "../../../images/logos/multiple-airline.svg";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const headers = [
  {
    title: "Air France",
    logo: airfrance,
  },
  {
    title: "Egypt Air",
    logo: egyptair,
  },
  {
    title: "Emirate",
    logo: emirate,
  },
  {
    title: "Royal air mac",
    logo: royal,
  },
  {
    title: "British Air",
    logo: BA,
  },
  {
    title: "Ethiopian Airline",
    logo: ET,
  },
  {
    title: "Qatar Airways",
    logo: QR,
  },
  {
    title: "Turkish Airline",
    logo: TK,
  },
  {
    title: "Virgin Atlantic",
    logo: VS,
  },
  {
    title: "Multiple",
    logo: MA,
  },
];

const stopLabel = (itineraries) => {
  const totalStops = itineraries.reduce((acc, itinerary) => {
    return acc + itinerary.segments.length - 1;
  }, 0);
  // console.log("flight", totalStops);
  return totalStops === 0
    ? "Non stop"
    : totalStops === 1
    ? "Stop 1"
    : "Stops 1+";
};

export default function PriceMatrix({ flightSearchResultData, dictionaries }) {
  const [tableData, setTableData] = useState({});
  // console.log("cjjddj", flightSearchResultData);
  useEffect(() => {
    const grouped = {};

    flightSearchResultData?.forEach((flight) => {
      const airline = flight.validatingAirlineCodes[0];
      const stop = stopLabel(flight.itineraries);
      const price = `₦${parseInt(flight.price.total).toLocaleString()}`;

      if (!grouped[airline]) grouped[airline] = {};
      grouped[airline][stop] = price;
    });

    setTableData(grouped);
  }, [flightSearchResultData]);

  const stopTypes = ["Non stop", "Stop 1", "Stops 1+"];
  const airlines = Object.keys(tableData);

  const flightData = [
    {
      type: "Non stop",
      prices: [
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦1,001,312",
        "₦1,001,312",
      ],
    },
    {
      type: "Stop 1",
      prices: [
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦1,001,312",
        "₦1,001,312",
      ],
    },
    {
      type: "Stops 1+",
      prices: [
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦2,001,312",
        "₦5,001,312",
        "₦1,001,312",
        "₦9,001,312",
        "₦1,001,312",
        "₦1,001,312",
      ],
    },
  ];

  const scrollRef = useRef(null);

  const COLUMN_WIDTH = 120; // px — must match your styled-components

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -COLUMN_WIDTH : COLUMN_WIDTH,
        behavior: "smooth",
      });
    }
  };

  return (
    <TableWrapper>
      {/* <h5>Price Matrix</h5> */}
      <NavButton onClick={() => scroll("left")}>
        {<FaLongArrowAltLeft />}
      </NavButton>
      <NavButton onClick={() => scroll("right")}>
        {<FaLongArrowAltRight />}
      </NavButton>

      <TableContainer>
        <StickyCol>
          <table>
            <thead>
              <tr>
                <th>FLIGHTS</th>
              </tr>
            </thead>
            <tbody>
              {stopTypes.map((stop, idx) => (
                <tr key={idx}>
                  <td>{stop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </StickyCol>

        <ScrollableContent ref={scrollRef}>
          <TableStyle>
            <thead>
              <tr>
                {airlines.map((data, idx) => (
                  <th key={idx}>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "10px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={`https://images.wakanow.com/Images/flight-logos/${data}.gif`}
                        alt={data}
                      />
                      <span>{dictionaries.carriers[data]}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stopTypes.map((stop) => (
                <tr key={stop}>
                  {airlines.map((code) => (
                    <td
                      key={code + stop}
                      style={{ border: "1px solid #ccc", padding: "10px" }}
                    >
                      {tableData[code][stop] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </TableStyle>
        </ScrollableContent>
      </TableContainer>
    </TableWrapper>
  );
}









// const PriceMatrix = ({ flightSearchResultData, dictionaries }) => {
//   const [tableData, setTableData] = useState({});
//   const [showScrollButtons, setShowScrollButtons] = useState(false);

//   const scrollRef = useRef(null);
//   const containerRef = useRef(null); // New ref to check container size

//   useEffect(() => {
//     const grouped = {};

//     flightSearchResultData?.forEach((flight) => {
//       const airline = flight.validatingAirlineCodes[0];
//       const stop = stopLabel(flight.itineraries);
//       const price = `₦${parseInt(flight.price.total).toLocaleString()}`;

//       if (!grouped[airline]) grouped[airline] = {};
//       grouped[airline][stop] = price;
//     });

//     setTableData(grouped);
//   }, [flightSearchResultData]);

//   const stopTypes = ["Non stop", "Stop 1", "Stops 1+"];
//   const airlines = Object.keys(tableData);

//   const COLUMN_WIDTH = 120;

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -COLUMN_WIDTH : COLUMN_WIDTH,
//         behavior: "smooth",
//       });
//     }
//   };

//   const checkForOverflow = () => {
//     if (scrollRef.current && containerRef.current) {
//       setShowScrollButtons(
//         scrollRef.current.scrollWidth > containerRef.current.offsetWidth
//       );
//     }
//   };

//   useEffect(() => {
//     checkForOverflow();
//     window.addEventListener("resize", checkForOverflow);
//     return () => window.removeEventListener("resize", checkForOverflow);
//   }, [airlines.length]);

//   return (
//     <TableWrapper $fullWidth={showScrollButtons}>
//       {showScrollButtons && (
//         <>
//           <NavButton onClick={() => scroll("left")}>
//             <FaLongArrowAltLeft />
//           </NavButton>
//           <NavButton onClick={() => scroll("right")}>
//             <FaLongArrowAltRight />
//           </NavButton>
//         </>
//       )}

//       <TableContainer ref={containerRef}>
//         <StickyCol>
//           <table>
//             <thead>
//               <tr>
//                 <th>FLIGHTS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stopTypes.map((stop, idx) => (
//                 <tr key={idx}>
//                   <td>{stop}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </StickyCol>

//         <ScrollableContent ref={scrollRef}>
//           <TableStyle>
//             <thead>
//               <tr>
//                 {airlines.map((code, idx) => (
//                   <th key={idx}>
//                     <div style={{ display: "flex", fontSize: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//                       <img src={`https://images.wakanow.com/Images/flight-logos/${code}.gif`} alt={code} />
//                       <span>{dictionaries.carriers[code]}</span>
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {stopTypes.map((stop) => (
//                 <tr key={stop}>
//                   {airlines.map((code) => (
//                     <td key={code + stop}>
//                       {tableData[code][stop] || "—"}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </TableStyle>
//         </ScrollableContent>
//       </TableContainer>
//     </TableWrapper>
//   );
// };
