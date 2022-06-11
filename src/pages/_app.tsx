import { AppProps } from "next/app";
import { SidebarDrawerContextProvider } from "../hooks/useSidebarDrawer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerContextProvider>
      <Component {...pageProps} />
    </SidebarDrawerContextProvider>
  );
}

export default MyApp;
