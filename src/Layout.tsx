import React from "react";
import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { Card } from "./components/ui/card";

const Layout = () => {
  return (
    <>
      <Card className='h-auto w-auto rounded-none font-sans border-none'>
        <Navbar />
        <Outlet />
        <Footer />
      </Card>
    </>
  );
};

export default Layout;
