import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight w-64">
          dashgo<span className="text-pink-500">.</span>
        </p>
      </a>
    </Link>
  );
};
