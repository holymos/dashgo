import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex items-center">
      <div className="hidden md:block mr-4 text-right">
        <p>Moisés Pacífico</p>
        <p className="text-gray-300 text-sm">moises.pacifico@hotmail.com</p>
      </div>

      <div className="h-12 w-12 relative">
        <Image
          src="https://github.com/holymos.png"
          alt="User image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
