import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = ({ transactions }) => {
  let balance = 0;

  const data = transactions.length
    ? transactions
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((t) => {
          balance += t.type === "income" ? t.amount : -t.amount;
          return {
            date: t.date,
            balance,
          };
        })
    : [{ date: "", balance: 0 }];

  const values = data.map((d) => d.balance);
  const min = Math.min(...values);
  const max = Math.max(...values);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;

      return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-3 py-2 rounded text-sm">
          <p className="text-xs text-gray-500">Available Balance</p>
          <p
            className={`font-semibold ${
              value >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ₹{value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-56 w-full">
      <h2 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
        Balance Trend
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis domain={[min - 50, max + 50]} tick={{ fontSize: 10 }} />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
