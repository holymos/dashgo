import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "../../Atoms";
import { NavSection } from "../../Molecules";

export const Sidebar = () => {
  return (
    <aside className="w-64 mr-8">
      <div className="flex flex-col gap-12 items-start">
        <NavSection title="GERAL">
          <NavLink
            href="/dashboard"
            description="Dashboard"
            icon={<RiDashboardLine fontSize={20} />}
          />
          <NavLink
            href="/users"
            description="Usuários"
            icon={<RiContactsLine fontSize={20} />}
          />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink
            href="/forms"
            description="Formulários"
            icon={<RiInputMethodLine fontSize={20} />}
          />
          <NavLink
            href="/automation"
            description="Automação"
            icon={<RiGitMergeLine fontSize={20} />}
          />
        </NavSection>
      </div>
    </aside>
  );
};
