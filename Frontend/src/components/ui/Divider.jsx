const Divider = () => {
  return (
    <div className="flex items-center gap-3">

      <div className="flex-1 h-px bg-gray-300" />

      <p className="text-gray-400 text-sm">
        OR
      </p>

      <div className="flex-1 h-px bg-gray-300" />

    </div>
  );
};

export default Divider;