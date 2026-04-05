import Badge from "../../components/ui/Badge";

const TransactionTable = ({ data, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          Transactions
        </h2>
        <span className="text-xs text-gray-500">
          {data.length} results
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          <thead className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
            <tr>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 text-left">Description</th>
              <th className="px-5 text-left">Category</th>
              <th className="px-5 text-left">Type</th>
              <th className="px-5 text-right">Amount</th>
              {isAdmin && <th className="px-5 text-right">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={isAdmin ? 6 : 5} className="py-16 text-center">
                  <div className="text-gray-500 text-sm">
                    No transactions found
                  </div>
                </td>
              </tr>
            ) : (
              data.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-5 py-3 text-gray-600 dark:text-gray-300">
                    {t.date}
                  </td>

                  <td className="px-5 text-gray-900 dark:text-white">
                    {t.description}
                  </td>

                  <td className="px-5 text-gray-600 dark:text-gray-300">
                    {t.category}
                  </td>

                  <td className="px-5">
                    <Badge type={t.type} />
                  </td>

                  <td
                    className={`px-5 text-right font-semibold ${
                      t.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    ₹{t.amount.toLocaleString("en-IN")}
                  </td>

                  {isAdmin && (
                    <td className="px-5 text-right">
                      <div className="flex justify-end gap-2">

                        <button
                          onClick={() => onEdit(t)}
                          className="px-3 py-1 text-xs font-medium rounded 
                          bg-blue-50 text-blue-700 
                          dark:bg-blue-900 dark:text-blue-300 
                          hover:bg-blue-100 dark:hover:bg-blue-800"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => onDelete(t.id)}
                          className="px-3 py-1 text-xs font-medium rounded 
                          bg-red-50 text-red-600 
                          dark:bg-red-900 dark:text-red-300 
                          hover:bg-red-100 dark:hover:bg-red-800"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;