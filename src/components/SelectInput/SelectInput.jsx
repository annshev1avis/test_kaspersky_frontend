import "./SelectInput.css";

export default function SelectInput({options, value, setValue}) {
  return (
    <div className="select-input">
      <select
        className="select-input__field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}