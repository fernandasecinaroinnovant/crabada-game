import { useState } from "react";
import CrabadaHeader from "../../components/Crabada/CrabadaHeader/CrabadaHeader";
import CrabadaPrices from "./CrabadaPrices/CrabadaPrices";
import "./Crabada.scss";

const CRABADA_PRICES_TAB = 3;

const Crabada: React.FC<{}> = () => {
  const [tabSelected, setTabSelected] = useState<number>(CRABADA_PRICES_TAB);

  const onTabChangeHandler = (tab: number): void => {
    setTabSelected(tab);
  };

  return (
    <div className="crabada">
      <CrabadaHeader
        tabSelected={tabSelected}
        onTabChangeHandler={onTabChangeHandler}
      />
      {tabSelected === CRABADA_PRICES_TAB && <CrabadaPrices />}
    </div>
  );
};

export default Crabada;
