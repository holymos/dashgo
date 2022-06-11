import { RiSearchLine } from "react-icons/ri";
import theme from "../../../styles/theme";

export const SearchBox = () => {
  return (
    <label className="hidden md:flex flex-1 py-4 px-8 ml-6 max-w-400 self-center text-gray-200 relative bg-gray-800 rounded-full justify-between items-center">
      <input
        type="text"
        aria-label="search-box"
        placeholder="Buscar na plataforma"
        className="text-gray-50 bg-transparent hover:bg-gray-800 border-none focus:ring-0 placeholder:text-gray-500 px-4 mr-4 h-0"
      />

      <RiSearchLine cursor="pointer" color={theme.colors.gray[500]} />
    </label>
  );
};
