import { create } from 'zustand';

export type State = {
  zoom: [number, number];
  isZoomed: boolean;
};

export type Action = {
  setZoom: (zoom: [number, number]) => void;
  setIsZoomed: (isZoomed: boolean) => void;
};

export const initialState: State = {
  zoom: [0, 0],
  isZoomed: false,
};

export const useMapZoomStore = create<State & Action>((set) => ({
  ...initialState,

  setZoom: (newZoom: [number, number]) =>
    set((prev) => ({ ...prev, zoom: newZoom })),

  setIsZoomed: (isZoomed: boolean) =>
    set((prev) => ({ ...prev, isZoomed: isZoomed })),
}));
