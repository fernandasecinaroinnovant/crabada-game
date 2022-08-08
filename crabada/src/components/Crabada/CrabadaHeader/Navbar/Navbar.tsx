import Arrow from "../../../../assets/SVG/Arrow";

const navbarOptions: { title: string; position: number }[] = [
  { title: "Profile", position: 0 },
  { title: "Economy", position: 1 },
  { title: "Population", position: 2 },
  { title: "Crab Prices", position: 3 },
];

const Navbar: React.FC<{
  onTabChangeHandler: Function;
  tabSelected: number;
}> = (props) => {
  const { tabSelected, onTabChangeHandler } = props;

  return (
    <div className="crabada-navbar">
      {navbarOptions.map(({ title, position }) => (
        <div
          className={`navbar-option ${tabSelected === position && "active"}`}
          onClick={() => onTabChangeHandler(position)}
          key={title}
        >
          {title}
          <span className="navbar-arrow">
            <Arrow />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
