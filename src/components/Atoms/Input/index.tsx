type InputProps = {
  name: string;
  label: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({ label, name, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-gray-500">
        {label}
      </label>
      <input type={type} id={name} name={name} />
    </div>
  );
};
