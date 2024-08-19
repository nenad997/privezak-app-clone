import { Outlet } from "react-router-dom";

import BottomNavbar from "./BottomNavbar";

const MainLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <BottomNavbar />
    </>
  );
};

export default MainLayout;
