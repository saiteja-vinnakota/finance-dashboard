const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
    danger:
      "border border-red-300 text-red-600 hover:bg-red-50",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;