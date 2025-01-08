import categories from "../Categories";

interface FilterProps {
  OnSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ OnSelectCategory }: FilterProps) => {
  return (
    <>
      <label htmlFor="filter" className="from-label">
        Filter
      </label>
      <select
        id="filter"
        className="form-select"
        onChange={(event) => OnSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
