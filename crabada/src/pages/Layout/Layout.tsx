import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Common/Sidebar/Sidebar";
import Menu from "../../components/Common/Menu/Menu";
import Footer from "../../components/Common/Footer/Footer";
import "./layout.scss";

const Layout: React.FC<{}> = () => {
  return (
    <div className="layout">
      <Menu />
      <Sidebar />
      <div className="content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
