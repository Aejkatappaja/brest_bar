import { create } from 'zustand';

export type State = {
  userLocation: [number, number] | null;
};

export type Action = {
  setUserLocation: (userLocation: [number, number]) => void;
};

export const initialState: State = {
  userLocation: null,
};

export const useUserLocationStore = create<State & Action>((set) => ({
  ...initialState,

  setUserLocation: (newLocation: [number, number]) =>
    set((prev) => ({ ...prev, userLocation: newLocation })),
}));
