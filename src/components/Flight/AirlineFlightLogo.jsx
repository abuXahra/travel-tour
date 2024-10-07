import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "../dalay"; // Adjust the import path as needed
import { FlightLogo } from "../../pages/flight/flight_result/FlightResult.style";
import flightLogo from "../../images/aire-peace.png";
const AirlineFlightLogo = React.memo(
  ({ keyWord, index, setIndex, showViewDetail, only, detail }) => {
    const [cityName, setCityName] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const debouncedKeyWord = useDebounce(keyWord, 2000);

    const fetchData = async (retryCount = 0) => {
      try {
        setLoading(true);
        const res = await axios.post("http://localhost:5000/codelookup", {
          airlineCodeLookup: keyWord,
        });
        console.log(res);
        setCityName(
          `${res?.data?.data[0]?.businessName}, ${res?.data?.data[0]?.commonName}`
        );
        setError(null);
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

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!cityName) {
      return <p>No data found</p>;
    }

    if (only) {
      return <div>{cityName}</div>;
    } else {
      return (
        <FlightLogo>
          <span>
            <img
              src={`https://wakanow-images.azureedge.net/Images/flight-logos/${keyWord}.gif`}
              alt={keyWord}
            />
            <h3> {cityName}</h3>
          </span>
          {detail ? (
            <></>
          ) : (
            <div
              onClick={() => {
                showViewDetail();
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
