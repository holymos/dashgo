import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Atoms/Input";

type FormInput = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleSignIn: SubmitHandler<FormInput> = (data) => {
    console.log({ data });
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form
        className="flex flex-col space-y-4 w-full max-w-360 bg-gray-800 p-8 rounded-lg"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Input
          name="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email}
          required
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          register={register}
          error={errors.password}
          required
        />

        <button type="submit" className="mt-6 bg-pink-500 p-3 rounded-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}
