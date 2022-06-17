import { FieldError, UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<{ [key: string]: string }>;
  required?: boolean;
  error: FieldError;
};

export const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  required = false,
  error,
  type = "text",
}) => {
  console.log({ error });

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} id={name} className="text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...(register(name),
        {
          required,
        })}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};
