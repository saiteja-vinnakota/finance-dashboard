import { useMemo } from "react";
import { useTransactionStore } from "../../store/transactionStore";
import InsightCard from "./InsightCard";

const InsightsPage = () => {
  const { transactions } = useTransactionStore();

  const data = useMemo(() => {
    if (!transactions.length) {
      return {
        income: 0,
        expense: 0,
        savings: 0,
        topCategory: "N/A",
        avgExpense: 0,
      };
    }

    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const savings = income - expense;

    const expenses = transactions.filter((t) => t.type === "expense");

    const avgExpense =
      expenses.length > 0
        ? Math.round(expense / expenses.length)
        : 0;

    const categoryMap = {};

    expenses.forEach((t) => {
      if (!t.category) return;
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    });

    let topCategory = "N/A";
    let max = 0;

    Object.entries(categoryMap).forEach(([cat, val]) => {
      if (val > max) {
        max = val;
        topCategory = cat;
      }
    });

    return {
      income,
      expense,
      savings,
      topCategory,
      avgExpense,
    };
  }, [transactions]);

  return (
    <div className="space-y-6">

      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Insights
      </h1>

      {/* TOP METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <InsightCard title="Total Income" value={`₹${data.income}`} />
        <InsightCard title="Total Expense" value={`₹${data.expense}`} />
        <InsightCard title="Savings" value={`₹${data.savings}`} />
        <InsightCard title="Top Category" value={data.topCategory} />
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Spending Summary
          </h2>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Total Expenses</span>
              <span>₹{data.expense}</span>
            </div>

            <div className="flex justify-between">
              <span>Average Expense</span>
              <span>₹{data.avgExpense}</span>
            </div>

            <div className="flex justify-between">
              <span>Savings</span>
              <span>₹{data.savings}</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Insights
          </h2>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>
              You spend most on <b>{data.topCategory}</b>
            </p>

            <p>
              Your savings are{" "}
              <b className={data.savings >= 0 ? "text-green-600" : "text-red-600"}>
                ₹{data.savings}
              </b>
            </p>

            <p>
              Average transaction: <b>₹{data.avgExpense}</b>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default InsightsPage;