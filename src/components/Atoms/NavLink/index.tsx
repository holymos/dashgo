import Link from "next/link";
import { ReactElement } from "react";

type NavLinkProps = {
  icon: ReactElement;
  description: string;
  href?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  description,
  href = "/",
}) => {
  return (
    <Link href={href}>
      <a className="flex items-center hover:text-gray-200">
        {icon}
        <span className="ml-4 font-medium text-lg sm:text-sm">
          {description}
        </span>
      </a>
    </Link>
  );
};
