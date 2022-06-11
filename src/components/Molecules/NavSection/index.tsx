import { ReactNode } from "react";

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <nav>
      <p className="font-bold text-gray-400 text-sm sm:text-xs">{title}</p>
      <div className="flex flex-col space-y-4 mt-8 items-stretch">
        {children}
      </div>
    </nav>
  );
};
