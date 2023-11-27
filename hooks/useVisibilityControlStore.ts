import { create } from 'zustand';

export type State = {
  isFilterVisible: boolean;
  isModalVisible: boolean;
  isSideNavVisible: boolean;
};

export type Action = {
  setIsFilterVisible: (isVisible: boolean) => void;
  setIsModalVisible: (isModalVisible: boolean) => void;
  setIsSideNavVisible: (isSideNavVisible: boolean) => void;
};

export const initialState: State = {
  isFilterVisible: false,
  isModalVisible: false,
  isSideNavVisible: true,
};

export const useVisibilityControlStore = create<State & Action>()((set) => ({
  ...initialState,

  setIsFilterVisible: (isFilterVisible: boolean) =>
    set(() => ({ isFilterVisible })),

  setIsModalVisible: (isModalVisible: boolean) =>
    set(() => ({ isModalVisible })),

  setIsSideNavVisible: (isSideNavVisible: boolean) =>
    set(() => ({ isSideNavVisible })),
}));
