import { create } from "zustand";

export const useAuthStore = create((set) => ({
  singleFlightResult: [],
  oneWayFlightResult: [],
  fravelDetail: {},
  hotelResult: [],
  setSingleFlightResult: (obj) => set({ singleFlightResult: obj }),
  setOneWayFlightResult:(obj) => set({ oneWayFlightResult: obj }),
  setTravelDetail: (obj) => set({ fravelDetail: obj }),
  setHotelResult: (obj) => set({ hotelResult: obj }),
}));
