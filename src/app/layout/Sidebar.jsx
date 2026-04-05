const Sidebar = ({ onClose }) => {
  return (
    <div className="h-full w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-5 flex flex-col">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-lg font-semibold">
          Menu
        </h2>

        {/* CLOSE BUTTON (mobile only) */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-600 dark:text-gray-300 text-lg"
        >
          ✕
        </button>

      </div>

      {/* NAVIGATION */}
      <nav className="space-y-2">

        <a
          href="/dashboard"
          className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Dashboard
        </a>

        <a
          href="/transactions"
          className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Transactions
        </a>

        <a
          href="/insights"
          className="block px-3 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Insights
        </a>

      </nav>

    </div>
  );
};

export default Sidebar;