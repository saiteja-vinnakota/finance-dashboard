import { useMemo } from "react";
import SummaryCard from "./SummaryCard";
import { useTransactionStore } from "../../store/transactionStore";
import BalanceChart from "../../components/charts/BalanceChart";
import CategoryChart from "../../components/charts/CategoryChart";

const DashboardPage = () => {
  const { transactions } = useTransactionStore();

  const { income, expenses, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expenses,
      balance: income - expenses,
    };
  }, [transactions]);

  const recent = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (!transactions.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Dashboard
      </h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Balance" value={`₹${balance}`} />
        <SummaryCard title="Income" value={`₹${income}`} />
        <SummaryCard title="Expenses" value={`₹${expenses}`} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <BalanceChart transactions={transactions} />
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <CategoryChart transactions={transactions} />
        </div>

      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Recent Transactions
          </h2>
        </div>

        {recent.length === 0 ? (
          <div className="text-sm text-gray-500 text-center py-6">
            No recent transactions
          </div>
        ) : (
          <div className="space-y-3">

            {recent.map((t) => (
              <div
                key={t.id}
                className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-800 pb-2"
              >

                <div>
                  <p className="text-gray-900 dark:text-white">
                    {t.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.category} • {t.date}
                  </p>
                </div>

                <p
                  className={`font-medium ${
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{t.amount.toLocaleString("en-IN")}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default DashboardPage;