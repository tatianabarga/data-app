import { create } from 'zustand';
import dummyTransactions from '../data/dummyData';

const useSpendingStore = create((set, get) => ({
  transactions: dummyTransactions,

  addTransaction: (transaction) => set((state) => ({
    transactions: [...state.transactions, transaction],
  })),

  findTotalSpent: () => {
    const { transactions } = get();
    return transactions.reduce((sum, e) => sum + e.amount, 0);
  },

  filterByCategory: (category) => {
    const { transactions } = get();
    transactions.filter((e) => e.category === `${category}`);
  },
}));

export default useSpendingStore;
