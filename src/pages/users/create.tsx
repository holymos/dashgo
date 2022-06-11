import Link from "next/link";
import { Input } from "../../components/Atoms";
import { Header, Sidebar } from "../../components/Organisms";

const CreateUser = () => {
  return (
    <div>
      <Header />

      <div className="flex w-full my-6 max-w-1480 mx-auto px-6">
        <Sidebar />

        <div className="flex-1 rounded-lg bg-gray-800 p-8">
          <h2 className="text-lg font-normal">Criar usuário</h2>
          <div className="w-full h-[2px] bg-gray-700 my-6" />

          <div className="flex space-y-8">
            <div className="grid grid-cols-min-child-240 gap-8 w-full">
              <Input name="name" label="Nome" />
              <Input name="email" label="Email" type="email" />
            </div>

            <div className="grid grid-cols-min-child-240 gap-8 w-full">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confirmação de senha"
                type="password"
              />
            </div>
          </div>

          <div className="flex mt-8 justify-end">
            <div className="flex space-x-4">
              <Link href="/users">
                <a className="bg-gray-700 p-3 rounded-md hover:bg-gray-600">
                  Cancelar
                </a>
              </Link>
              <button className="bg-pink-500 hover:bg-pink-600 p-3 rounded-md hover:">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
