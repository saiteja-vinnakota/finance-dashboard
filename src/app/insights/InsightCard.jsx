const InsightCard = ({ title, value, description }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
      <p className="text-xs text-gray-500">{title}</p>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
        {value}
      </h2>
      {description && (
        <p className="text-sm text-gray-500 mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default InsightCard;