import { create } from "zustand";

export const useAuthStore = create((set) => ({
  singleFlightResult: [],
  fravelDetail: {},
  setSingleFlightResult: (obj) => set({ singleFlightResult: obj }),
  setTravelDetail: (obj) => set({ fravelDetail: obj }),
}));
