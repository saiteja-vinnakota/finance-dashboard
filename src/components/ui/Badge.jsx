const Badge = ({ type }) => {
  const styles =
    type === "income"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`text-xs px-2 py-1 rounded font-medium ${styles}`}>
      {type}
    </span>
  );
};

export default Badge;