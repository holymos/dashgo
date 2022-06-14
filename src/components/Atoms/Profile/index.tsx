import Image from "next/image";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const Profile = () => {
  const { isLg, is2xl } = useWindowSize();
  const imageSize = isLg || is2xl ? 38 : 34;

  return (
    <div className="flex items-center">
      <div className="hidden md:block mr-2 md:mr-4 text-right">
        <p>Moisés Pacífico</p>
        <p className="text-gray-300 text-sm">moises.pacifico@hotmail.com</p>
      </div>

      <Image
        src="https://github.com/holymos.png"
        alt="User image"
        width={imageSize}
        height={imageSize}
        className="rounded-full"
      />
    </div>
  );
};
