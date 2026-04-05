const Alert = ({ message }) => {
  return (
    <div className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-md">
      {message}
    </div>
  );
};

export default Alert;