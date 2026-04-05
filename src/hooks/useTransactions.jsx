import { useTransactionStore } from "../store/transactionStore";

export const useTransactions = () => {
  const { transactions, setTransactions } = useTransactionStore();

  const addTransaction = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const updateTransaction = (tx) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === tx.id ? tx : t))
    );
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
};