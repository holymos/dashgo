import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Molecules";
import { Header, Sidebar } from "../../components/Organisms";

const UserList = () => {
  return (
    <div>
      <Header />

      <div className="flex w-full my-6 max-w-1480 mx-auto px-6">
        <Sidebar />

        <div className="flex-1 rounded-lg bg-gray-800 p-8">
          <div className="flex mb-8 justify-between items-center">
            <h2 className="text-2xl font-normal">Usuários</h2>

            <div className="flex gap-1 justify-center bg-pink-500 items-center p-2 rounded-md">
              <RiAddLine />
              <Link href="/users/create">
                <a className="text-xs text-white">Criar novo usuário</a>
              </Link>
            </div>
          </div>

          <table className="w-full">
            <thead className="text-left text-gray-300 font-normal uppercase text-xs">
              <tr>
                <th className="px-6 text-gray-300 w-8">
                  <input className="" type="checkbox" />
                </th>
                <th>Usuário</th>
                <th>Data de cadastro</th>
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="px-6 text-gray-300 w-8">
                  <input className="" type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="font-bold">Moisés Pacífico</p>
                    <p className="text-sm text-gray-300">
                      moises.pacifico@hotmail.com
                    </p>
                  </div>
                </td>
                <td>4 Jun 2021</td>
                <td>
                  <div className="flex gap-1 justify-center bg-purple-500 items-center p-2 rounded-md w-20">
                    <RiPencilLine />
                    <Link href="/">
                      <a className="text-xs text-white">Editar</a>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserList;
