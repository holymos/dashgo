import { Input } from "../components/Atoms/Input";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form className="flex flex-col gap-4 w-full max-w-360 bg-gray-800 p-8 rounded-lg">
        <Input name="email" label="Email" type="email" />
        <Input name="password" label="Senha" type="password" />

        <button type="submit" className="mt-6 bg-pink-500 p-3 rounded-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}
