import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type SidebarDrawerContextProviderProps = {
  children: ReactNode;
};

type SidebarDrawerContextData = {
  isVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerContextProvider: React.FC<
  SidebarDrawerContextProviderProps
> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(false);
  }, [router.asPath]);

  const onClose = () => {
    setIsVisible(false);
  };

  const onOpen = () => {
    setIsVisible(true);
  };

  return (
    <SidebarDrawerContext.Provider
      value={{
        isVisible,
        onOpen,
        onClose,
      }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
