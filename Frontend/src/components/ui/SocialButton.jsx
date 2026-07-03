const SocialButton = ({
  icon,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      h-12
      border
      rounded-full
      flex
      items-center
      justify-center
      gap-3
      hover:bg-gray-100
      transition
      "
    >
      {icon}

      <span className="font-medium">
        {children}
      </span>

    </button>
  );
};

export default SocialButton;