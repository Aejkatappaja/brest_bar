import { create } from 'zustand';

export type State = {
  limit: number;
  sort: string;
  search: string;
};

export type Action = {
  setLimit: (limit: number) => void;
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
};

export const initialState: State = {
  limit: 5,
  sort: '',
  search: '',
};

export const useDataFilterStore = create<State & Action>((set) => ({
  ...initialState,

  setLimit: (newLimit: number) =>
    set((prev) => ({ ...prev, limit: prev.limit + newLimit })),

  setSort: (newSort: string) => set((prev) => ({ ...prev, sort: newSort })),

  setSearch: (newSearch: string) =>
    set((prev) => ({ ...prev, search: newSearch })),
}));
