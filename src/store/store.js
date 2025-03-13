import { create } from "zustand";
import axios from "axios";

const domain = "http://localhost:5000";
// const domain = "https://manzo-travels-be.vercel.app";
// const domain = "https://manzo-travels-be.onrender.com";
// const domain = "https://backend.manzotravels.com";

export const useAuthStore = create((set) => ({
  loader: false,
  singleFlightResult: [],
  oneWayFlightResult: [],
  multiCityFlightResult: [],
  oneWayFlightOrder: false,
  travelDetail: {},
  hotelResult: [],
  setLoader: (loader) => set({ loader }),
  setOneWayFlightOrder: (obj) => set({ oneWayFlightOrder: obj }),
  setMultiCityFlightResult: (obj) => set({ multiCityFlightResult: obj }),
  setSingleFlightResult: (obj) => set({ singleFlightResult: obj }),
  setOneWayFlightResult: (obj) => set({ oneWayFlightResult: obj }),
  setTravelDetail: (obj) => set({ travelDetail: obj }),
  setHotelResult: (obj) => set({ hotelResult: obj }),
  airportAndCitySearch: async (keyWord) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/airport&CitySearch`,
        { word: keyWord }
      );
      return res?.data?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  flightOffersSearch: async (queryParams) => {
    try {
      console.log(queryParams);
      const res = await axios.post(
        `${domain}/api/v1/flights/flightOffersSearch`,
        queryParams
      );
      console.log(res);
      return res?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  flightOffersSearchMultiCity: async (queryParams) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/flightOffersSearchMultiCity`,

        queryParams
      );
      return res?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  airlinCodeLookup: async (code) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/airlinCodeLookup kkkkkkkkk`,
        {
          airlineCodeLookup: code,
        }
      );
      return res?.data?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  flightPriceLookup: async (Flight) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/flightPriceLookup`,
        {
          flight: Flight,
        }
      );
      return res?.data?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  flightCreateOrders: async (
    Flight,
    Traveler,
    transactionReference,
    littelFlightInfo
  ) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/flightCreateOrders`,
        {
          flight: Flight,
          travelers: Traveler,
          transactionReference,
          littelFlightInfo,
        }
      );
      // console.log("vfbsbvfksbjhvfsbvjhf", res?.data);
      return res?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  getCreatedIssuanceBooked: async (id) => {
    try {
      console.log("ddddddddddddd", id);
      const res = await axios.post(
        `${domain}/api/v1/flights/createdIssuanceBooked`,
        {
          bookingId: id,
        }
      );
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
      return err?.response?.data;
    }
  },
  calculateAgeCategory: (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // if (age <= 1) return `Infant (${age} year old)`;
    // if (age <= 12) return `Child (${age} years old)`;
    // return `Adult (${age} years old)`;
    if (age <= 1) return `Infant`;
    if (age <= 12) return `Child`;
    return `Adult`;
  },
}));
