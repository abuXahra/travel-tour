import React, { useState, useEffect } from "react";
import { useDebounce } from "../dalay"; // Adjust the import path as needed
import { FlightLogo } from "../../pages/flight/flight_result/FlightResult.style";
import { useAuthStore } from "../../store/store";
import flightLogo from "../../images/aire-peace.png";
const AirlineFlightLogo = React.memo(
  ({
    keyWord,
    index,
    setIndex,
    showViewDetail,
    only,
    detail,
    data,
    dictionaries,
  }) => {
    const { airlinCodeLookup } = useAuthStore();
    const [cityName, setCityName] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const debouncedKeyWord = useDebounce(keyWord, 2000);

    const fetchData = async (retryCount = 0) => {
      try {
        // setLoading(true);
        // const res = await airlinCodeLookup(keyWord);
        // console.log(res);
        // setCityName(`${res[0]?.businessName}, ${res[0]?.commonName}`);
        // setError(null);
      } catch (err) {
        if (err.response?.status === 429 && retryCount < 5) {
          const retryAfter = Math.pow(2, retryCount) * 1000; // Exponential backoff: 1s, 2s, 4s, 8s, 16s
          setTimeout(() => fetchData(retryCount + 1), retryAfter);
        } else {
          setError(err?.response?.data || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (!debouncedKeyWord) return;

      fetchData();
    }, [debouncedKeyWord]);
    let operating = "";
    let carrierCode = dictionaries.carriers[keyWord];

    if (data?.itineraries[index]?.segments?.[0]?.operating) {
      operating =
        dictionaries.carriers[
          data?.itineraries[index].segments[0].operating.carrierCode
        ];
    }

    if (only) {
      return <div>{carrierCode}</div>;
    } else {
      return (
        <FlightLogo>
          <span>
            <img
              src={`https://images.wakanow.com/Images/flight-logos/${keyWord}.gif`}
              alt={keyWord}
            />
            <h4>{carrierCode}</h4>
          </span>
          {detail ? (
            <></>
          ) : (
            <div
              onClick={() => {
                showViewDetail(data?.id);
                setIndex(index);
              }}
            >
              View Flight Detail
            </div>
          )}
        </FlightLogo>
      );
    }
  }
);

export default AirlineFlightLogo;
