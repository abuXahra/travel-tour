import { create } from "zustand";

export const useAuthStore = create((set) => ({
  singleFlightResult: [],
  oneWayFlightResult: [],
  multiCityFlightResult: [],
  travelDetail: {},
  hotelResult: [],
  setMultiCityFlightResult: (obj) => set({ multiCityFlightResult: obj }),
  setSingleFlightResult: (obj) => set({ singleFlightResult: obj }),
  setOneWayFlightResult: (obj) => set({ oneWayFlightResult: obj }),
  setTravelDetail: (obj) => set({ travelDetail: obj }),
  setHotelResult: (obj) => set({ hotelResult: obj }),
}));
