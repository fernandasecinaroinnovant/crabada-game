import { useState } from "react";
import P2eIcon from "../../../assets/SVG/P2E-logo-white.svg";
import Arrow from "../../../assets/SVG/Arrow";
import "./menu.scss";

const menuOptions: (
  | {
      name?: undefined;
      id: string;
    }
  | {
      name: string;
      id: string;
    }
)[] = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Discover",
    id: "discover",
  },
  {
    name: "Resources",
    id: "resources",
  },
  {
    name: "Careers",
    id: "careers",
  },
  {
    name: "About",
    id: "about",
  },
];

const Menu: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const onClickArrowHandler = (): void => {
    setIsOpen((previousValue) => !previousValue);
  };

  return (
    <div className="menu">
      <div className="menu-header" onClick={onClickArrowHandler}>
        <img src={P2eIcon} alt="Icon" />
        <span>
          <Arrow />
        </span>
      </div>
      {isOpen && (
        <div className="menu-body">
          <div className="menu-options">
            {menuOptions.map(({ name, id }) => (
              <div className="menu-option" key={id}>
                {name}
              </div>
            ))}
          </div>
          <div className="game-list">
            <div className="game-list-title">GAME LIST</div>
          </div>
          <div className="version">Version 2.0.0</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
