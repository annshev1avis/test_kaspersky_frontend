import "./SearchInput.css";

export default function SearchInput({className}) {
  return (
    <div className={`search-input ${className}`}>
      <input
        type="text"
        className="search-input__field"
        placeholder="Поиск по названию, жанру или актёрам..."
      />
    </div>
  );
}