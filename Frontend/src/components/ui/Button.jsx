const Button = ({
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="
        w-full
        h-12
        rounded-full
        bg-sky-600
        hover:bg-sky-700
        text-white
        font-semibold
        transition-all
        duration-300
      "
    >
      {children}
    </button>
  );
};

export default Button;