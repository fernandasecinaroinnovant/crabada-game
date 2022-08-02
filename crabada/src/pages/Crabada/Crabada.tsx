import { Outlet } from "react-router-dom";
import "./Crabada.scss";

const Crabada: React.FC<{}> = () => {
  return (
    <div className="Crabada">
      <div>Crabada</div>
      <Outlet />
    </div>
  );
};

export default Crabada;
