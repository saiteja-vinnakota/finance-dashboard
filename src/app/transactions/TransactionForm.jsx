import { useState, useEffect } from "react";
import { categories } from "../../data/mockData";

const TransactionForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    type: "expense",
    amount: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({
        id: Date.now().toString(),
        date: "",
        description: "",
        category: "",
        type: "expense",
        amount: "",
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      amount: Number(form.amount),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md space-y-4 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {initialData ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        >
          <option value="">Select Category</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <div className="flex justify-end gap-2 pt-2">
          
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 text-sm rounded 
            bg-gray-100 text-gray-700 
            dark:bg-gray-800 dark:text-gray-300 
            hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-3 py-1 text-sm rounded 
            bg-gray-900 text-white 
            hover:bg-gray-800"
          >
            Save
          </button>

        </div>
      </form>
    </div>
  );
};

export default TransactionForm;