import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return(
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;