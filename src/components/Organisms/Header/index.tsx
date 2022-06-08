import { Logo, Profile, SearchBox, NotificationsNav } from "../../Atoms";

export const Header = () => {
  return (
    <header className="flex w-full max-w-1480 h-20 mx-auto mt-4 items-center px-6">
      <Logo />

      <SearchBox />

      <div className="flex items-center ml-auto">
        <NotificationsNav />
        <Profile />
      </div>
    </header>
  );
};
