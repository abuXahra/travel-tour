import { create } from "zustand";
import axios from "axios";

const domain = "http://localhost:5000";
//const domain = "https://backend.lillybeautyfashion.com";

export const useAuthStore = create((set) => ({
  singleFlightResult: [],
  oneWayFlightResult: [],
  multiCityFlightResult: [],
  oneWayFlightOrder: false,
  travelDetail: {},
  hotelResult: [],
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
      return res?.data?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
  flightOffersSearchMultiCity: async (queryParams) => {
    try {
      const res = await axios.post(
        `${domain}/api/v1/flights/flightOffersSearchMultiCity`,
        {
          flightSearch: queryParams,
        }
      );
      return res?.data?.data;
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
      console.log(res?.data?.data);
      return res?.data?.data;
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
}));
