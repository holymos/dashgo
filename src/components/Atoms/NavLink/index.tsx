import { ReactElement } from "react";
import { ActiveLink } from "../ActiveLink";

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
    <ActiveLink href={href}>
      <a className="flex items-center hover:text-gray-200">
        {icon}
        <span className="ml-4 font-medium text-lg sm:text-sm">
          {description}
        </span>
      </a>
    </ActiveLink>
  );
};
