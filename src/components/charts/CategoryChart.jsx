import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

const CategoryChart = ({ transactions }) => {
  const categoryMap = {};

  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      if (!t.category) return;
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    });

  const data = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="h-64">

      <h2 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
        Spending Breakdown
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name) => [`₹${value}`, name]}
          />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CategoryChart;