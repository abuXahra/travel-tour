import { create } from "zustand";

export const useAuthStore = create((set) => ({
  flightResult: [],
  fravelDetail: {},
  setFlightResult: (obj) => set({ flightResult: obj }),
  setTravelDetail: (obj) => set({ fravelDetail: obj }),
}));
