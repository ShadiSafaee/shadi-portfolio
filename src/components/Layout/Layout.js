import Sidebar from "../Sidebar/Sidebar";
import "./layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
