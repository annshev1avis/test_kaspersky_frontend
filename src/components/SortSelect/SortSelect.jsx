import "./SortSelect.css";

export default function SortSelect({options}) {
  return (
    <div className="sort-select">
      <select className="sort-select__field">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}