import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "../dalay"; // Adjust the import path as needed

const AirlineCodeLookup = React.memo(({ keyWord }) => {
  const [cityName, setCityName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedKeyWord = useDebounce(keyWord, 2000);

  const fetchData = async (retryCount = 0) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/airport", {
        word: debouncedKeyWord,
      });
      setCityName(
        `${res?.data?.data[0]?.address?.regionCode}, ${res?.data?.data[0]?.address?.countryName}, ${res?.data?.data[0]?.address?.cityName}`
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

  return (
    <p p style={{ width: 150, fontSize: 10 }}>
      {cityName}
    </p>
  );
});

export default AirlineCodeLookup;
