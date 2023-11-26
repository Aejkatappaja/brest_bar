import { create } from 'zustand';

export type State = {
  isFilterVisible: boolean;
  isModalVisible: boolean;
};

export type Action = {
  setIsFilterVisible: (isVisible: boolean) => void;
  setIsModalVisible: (isModalVisible: boolean) => void;
};

export const initialState: State = {
  isFilterVisible: false,
  isModalVisible: false,
};

export const useVisibilityControlStore = create<State & Action>()((set) => ({
  ...initialState,

  setIsFilterVisible: (isFilterVisible: boolean) =>
    set(() => ({ isFilterVisible })),

  setIsModalVisible: (isModalVisible: boolean) =>
    set(() => ({ isModalVisible })),
}));
