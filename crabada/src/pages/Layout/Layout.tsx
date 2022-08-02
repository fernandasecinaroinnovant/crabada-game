import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import "./Layout.scss";

const Layout: React.FC<{}> = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
