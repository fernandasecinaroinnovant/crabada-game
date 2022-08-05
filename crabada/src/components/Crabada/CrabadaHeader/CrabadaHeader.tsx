import AmuletPrice from "./AmuletPrice/AmuletPrice";
import "./crabada-header.scss";

const navbarOptions: string[] = [
  "Profile",
  "Economy",
  "Population",
  "Crab Prices",
];

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
      <div className="crabada-navbar">
        {navbarOptions.map((navbarOption, index) => (
          <div
            className={`navbar-option ${tabSelected === index && "active"}`}
            onClick={() => onTabChangeHandler(index)}
            key={navbarOption}
          >
            {navbarOption}
          </div>
        ))}
      </div>
      <span className="separator"></span>
    </div>
  );
};

export default CrabadaHeader;
