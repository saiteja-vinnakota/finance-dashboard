import { useState, useMemo } from "react";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import { useAuthStore } from "../../store/authStore";
import { useTransactionStore } from "../../store/transactionStore";

const TransactionsPage = () => {
  const { user } = useAuthStore();
  const { transactions, setTransactions } = useTransactionStore();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");

  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleSubmit = (data) => {
    setTransactions((prev) => {
      const exists = prev.find((t) => t.id === data.id);

      if (exists) {
        return prev.map((t) =>
          t.id === data.id ? data : t
        );
      }

      return [data, ...prev];
    });
  };

  const handleDelete = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  const filtered = useMemo(() => {
    let data = [...transactions];

    if (type !== "all") data = data.filter((t) => t.type === type);
    if (category !== "all") data = data.filter((t) => t.category === category);
    if (search)
      data = data.filter((t) =>
        t.description.toLowerCase().includes(search.toLowerCase())
      );

    if (sort === "latest") data.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sort === "oldest") data.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sort === "high") data.sort((a, b) => b.amount - a.amount);
    if (sort === "low") data.sort((a, b) => a.amount - b.amount);

    return data;
  }, [transactions, search, type, category, sort]);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Transactions
        </h1>

        {user?.role === "admin" && (
          <button
            onClick={() => {
              setEditing(null);
              setIsOpen(true);
            }}
            className="px-4 py-2 text-sm bg-gray-900 text-white rounded-md"
          >
            Add Transaction
          </button>
        )}
      </div>

      <TransactionFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <TransactionTable
        data={filtered}
        onEdit={(t) => {
          setEditing(t);
          setIsOpen(true);
        }}
        onDelete={handleDelete}
        isAdmin={user?.role === "admin"}
      />

      <TransactionForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        initialData={editing}
      />

    </div>
  );
};

export default TransactionsPage;