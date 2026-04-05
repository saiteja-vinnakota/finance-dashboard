const SimpleTable = ({ columns, data }) => {
  return (
    <table className="w-full text-sm">
      
      <thead className="text-gray-500 border-b border-gray-200 dark:border-gray-800">
        <tr>
          {columns.map((col) => (
            <th key={col} className="px-5 py-3 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className="border-b border-gray-200 dark:border-gray-800"
          >
            {row.map((cell, j) => (
              <td key={j} className="px-5 py-3">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default SimpleTable;