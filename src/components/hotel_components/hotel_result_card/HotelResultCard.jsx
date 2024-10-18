import React, { useState, useEffect } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import {
  Breakfast,
  ButtonStyle,
  LocationContainer,
  ResultCard,
  ResultCardBody,
  ResultCardImage,
  ResultContent,
  ResultContentLeft,
  ResultContentRight,
  ResultState,
} from "./HotelResultCard.style";
import cardImage from "../../../images/hotel-bg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDebounce } from "../../dalay";
import axios from "axios";

const HotelResultInfo = ({ hotelId }) => {
  // const [hotelId, setHotelId] = useState(false);
  const [cityName, setCityName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedKeyWord = useDebounce(hotelId, 2000);

  const fetchData = async (retryCount = 0) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/hotelID", {
        hotelID: hotelId,
      });
      console.log(res);
      //   setCityName(
      //     `${res?.data?.data[0]?.businessName}, ${res?.data?.data[0]?.commonName}`
      //   );
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
  return (
    <div>
      <h1>Good</h1>
    </div>
  );
};

export default function HotelResultCard({
  data,
  picture,
  title,
  location,
  googleMapLink,
  distance,
  locationLink,
  recommended,
  type,
  property,
  bedrooms,
  livingRooms,
  bathrooms,
  kitchen,
  dimension,
  bedding,
  cancellation,
  grade,
  reviewCount,
  checkingDate,
  checkoutDate,
  rating,
  nights,
  adults,
  child,
  price,
  handleButtonClick,
}) {
  const [favoriteColor, setFavoriteColor] = useState("#000000");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFavorite = () => {
    if (favoriteColor === "#000000") {
      setFavoriteColor("#FF6805");
    } else if (favoriteColor === "#FF6805") {
      setFavoriteColor("#000000");
    }
  };

  useEffect(() => {
    if (currentIndex < data[1]?.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 3000); // Delay of 1 second for each item
      return () => clearTimeout(timer);
    }
  }, [currentIndex, data?.length]);

  return (
    <>
      {data[1]?.slice(0, currentIndex).map((data, index) => (
        <ResultCard key={index}>
          {/* <ResultCardContent> */}
          <HotelResultInfo hotelId={data.hotelId} />
          {/* imageWraper */}
          <ResultCardImage
            bgImage={picture}
            favoriteColor={favoriteColor}
            className="hov"
          >
            <span onClick={handleFavorite}>
              <MdOutlineFavorite />
            </span>
          </ResultCardImage>

          {/*content  */}
          <ResultCardBody>
            <ResultContent>
              <ResultContentLeft>
                <h3>{data.name}</h3>
                <LocationContainer>
                  <a href={locationLink}>{location}</a>{" "}
                  <a href={googleMapLink}>Show on map</a> {distance}km from
                  center
                </LocationContainer>
              </ResultContentLeft>
              <ResultContentRight>
                <ResultState>
                  <span>
                    <b>{grade}</b> {reviewCount} reviews
                  </span>
                  <div>{rating}</div>
                </ResultState>
              </ResultContentRight>
            </ResultContent>
            <ResultContent>
              <ResultContentLeft>
                <span>
                  <div>{recommended}</div>
                </span>
                <b>{type}</b>
                <p>
                  {property ? property : " "}
                  {bedrooms ? " . " + bedrooms : ""}
                  {livingRooms ? " . " + livingRooms : ""}
                  {bathrooms ? " . " + bathrooms : ""}
                  {kitchen ? " . " + kitchen : ""}
                  {dimension ? " . " + dimension : ""}
                </p>
                <p>
                  {nights}, {adults}, {child}
                </p>
                <p style={{ color: "green" }}>{cancellation}</p>
              </ResultContentLeft>
              <ResultContentRight>
                <span>
                  <div>
                    {checkingDate} - {checkoutDate}
                  </div>
                </span>
                <p>{bedding}</p>
                <span style={{ color: "#0D3984" }}>
                  <b>NGN {price}</b>
                </span>
                <p>Includes taxes and charges</p>

                <ButtonStyle onClick={handleButtonClick}>
                  See Availability <FaLongArrowAltRight />
                </ButtonStyle>
              </ResultContentRight>
            </ResultContent>
          </ResultCardBody>
          {/* </ResultCardContent> */}
        </ResultCard>
      ))}
    </>
  );
}

{
  /* <span>Recommended for your group </span>
<div>
 <b>Two-Bedroom Apartment</b>
 <span>Entire Apartment . 2 bedrooms . 1 living room . 3 bath rooms . 1 kitchen . 3oomsq</span>   
 <span>3 beds (1 extra-large double, 1 sofa bed 1 large double)</span>
 <span>Free concellation</span>
</div> */
}
