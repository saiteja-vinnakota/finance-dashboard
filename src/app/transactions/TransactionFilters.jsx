import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import { categories } from "../../data/mockData";

const TransactionFilters = ({
  search,
  setSearch,
  type,
  setType,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />

        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>

        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </Select>

        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="high">Amount High → Low</option>
          <option value="low">Amount Low → High</option>
        </Select>

      </div>
    </div>
  );
};

export default TransactionFilters;