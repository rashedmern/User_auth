const Select = ({
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="
        w-full
        h-12
        rounded-full
        bg-gray-100
        border
        border-transparent
        px-4
        text-gray-700
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-200
        transition-all
      "
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;