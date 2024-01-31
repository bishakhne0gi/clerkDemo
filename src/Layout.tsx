import { Footer, Navbar } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { Card } from "./components/ui/card";
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "./components/theme-provider";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
          <Card className='h-auto w-auto rounded-none font-sans border-none'>
            <Navbar />
            <Outlet />
            <Footer />
          </Card>
        </ClerkProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
