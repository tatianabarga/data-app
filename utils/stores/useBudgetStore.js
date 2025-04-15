import { create } from 'zustand';

const useBudgetStore = create((set) => ({
  entries: [
    { id: 1, type: 'income', amount: 1000 },
    { id: 2, type: 'expense', amount: 300 },
  ],
  addEntry: (entry) => set((state) => ({
    entries: [...state.entries, entry],
  })),
}));

export default useBudgetStore;
