function Input({ children, label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary-900 font-semibold capitalize text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Input;
