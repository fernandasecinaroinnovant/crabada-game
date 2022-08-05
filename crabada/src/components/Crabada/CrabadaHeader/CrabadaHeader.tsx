import "./CrabadaHeader.scss";

const navbarOptions: string[] = [
  "Profile",
  "Economy",
  "Population",
  "Crab Prices",
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
          <div></div>
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
