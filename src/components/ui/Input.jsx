const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md 
      bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
      placeholder-gray-400 dark:placeholder-gray-500 
      focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
      {...props}
    />
  );
};

export default Input;