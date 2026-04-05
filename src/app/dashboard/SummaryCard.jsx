const SummaryCard = ({ title, value, tone = "neutral" }) => {
  const toneStyles =
    tone === "positive"
      ? "text-green-600"
      : tone === "negative"
      ? "text-red-600"
      : "text-gray-900 dark:text-white";

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500">{title}</p>
          <p className={`mt-2 text-2xl font-semibold ${toneStyles}`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;