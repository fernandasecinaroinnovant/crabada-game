import AmuletPrice from "./AmuletPrice/AmuletPrice";
import Banner from "../../../assets/SVG/crabada-banner.svg";
import "./crabada-header.scss";
import Navbar from "./Navbar/Navbar";

const amulets: {
  amuletName: string;
  amuletPrice: number;
  difference: number;
}[] = [
  {
    amuletName: "AVAX",
    amuletPrice: 86.65,
    difference: -1.45,
  },
  {
    amuletName: "CRA",
    amuletPrice: 1.21,
    difference: 1.21,
  },
  {
    amuletName: "TUS",
    amuletPrice: 0.11,
    difference: -1.45,
  },
  {
    amuletName: "CRAM",
    amuletPrice: 0.11,
    difference: -1.45,
  },
];

const CrabadaHeader: React.FC<{
  onTabChangeHandler: Function;
  tabSelected: number;
}> = (props) => {
  const { tabSelected, onTabChangeHandler } = props;

  return (
    <div className="crabada-header">
      <div className="crabada-header-title">
        <span className="header-name">Crabada</span>
        <div className="header-current-values">
          {amulets.map(({ amuletName, amuletPrice, difference }) => (
            <AmuletPrice
              key={amuletName}
              amuletName={amuletName}
              amuletPrice={amuletPrice}
              difference={difference}
            />
          ))}
        </div>
      </div>
      <img src={Banner} alt="Banner" className="banner" />
      <Navbar
        tabSelected={tabSelected}
        onTabChangeHandler={onTabChangeHandler}
      />
      <span className="separator"></span>
    </div>
  );
};

export default CrabadaHeader;
