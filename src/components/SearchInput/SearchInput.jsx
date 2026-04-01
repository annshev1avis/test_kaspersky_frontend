import "./SearchInput.css";

export default function SearchInput({className, value, setValue}) {
  return (
    <div className={`search-input ${className}`}>
      <input
        type="text"
        className="search-input__field"
        placeholder="Поиск по названию, жанру или актёрам..."
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
      />
    </div>
  );
}