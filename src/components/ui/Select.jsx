const Select = ({ children, className = "", ...props }) => {
  return (
    <select
      className={`px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
      bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
      focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;