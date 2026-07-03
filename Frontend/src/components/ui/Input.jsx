const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        h-[56px]
        rounded-full
        bg-[#F2F4F7]
        border
        border-transparent
        pl-5 
        pr-5
        text-[18px]
        font-medium
        text-gray-700
        placeholder:text-gray-500
        placeholder:text-[18px]
        placeholder:indent-[16px]
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-200
        transition-all
      "
    />
  );
};

export default Input;