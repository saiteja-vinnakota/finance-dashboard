import { create } from "zustand";
import { mockTransactions } from "../data/mockData";

const STORAGE_KEY = "transactions";

const load = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : mockTransactions;
  } catch {
    return mockTransactions;
  }
};

export const useTransactionStore = create((set) => ({
  transactions: load(),

  setTransactions: (fn) =>
    set((state) => {
      const updated =
        typeof fn === "function" ? fn(state.transactions) : fn;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return { transactions: updated };
    }),
}));