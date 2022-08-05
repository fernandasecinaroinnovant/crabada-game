import { useState } from "react";
import P2eIcon from "../../../assets/SVG/P2eIcon";
import MagnifyingGlass from "../../../assets/SVG/MagnifyingGlass";
import Applications from "../../../assets/SVG/Applications";
import Game from "../../../assets/SVG/Game";
import Compass from "../../../assets/SVG/Compass";
import Diamond from "../../../assets/SVG/Diamond";
import TwitterLogo from "../../../assets/SVG/TwitterLogo";
import DiscordLogo from "../../../assets/SVG/DiscordLogo";
import TwitchLogo from "../../../assets/SVG/TwitchLogo";
import AboutIcon from "../../../assets/SVG/AboutIcon";
import "./sidebar.scss";

const sidebarOptions: (
  | {
      component: JSX.Element;
      name?: undefined;
      id: string;
    }
  | {
      component: JSX.Element;
      name: string;
      id: string;
    }
)[] = [
  {
    component: <P2eIcon />,
    id: "companyLogo",
  },
  {
    component: <MagnifyingGlass />,
    name: "Search",
    id: "search",
  },
  {
    component: <Applications />,
    name: "Home",
    id: "home",
  },
  {
    component: <Game />,
    name: "Games",
    id: "games",
  },
  {
    component: <Compass />,
    name: "News",
    id: "news",
  },
  {
    component: <Diamond />,
    name: "Careers",
    id: "careers",
  },
  {
    component: <AboutIcon />,
    name: "About",
    id: "about",
  },
];

const Sidebar: React.FC<{}> = () => {
  const [isHoveringOnSidebar, setIsHoveringOnSidebar] =
    useState<Boolean>(false);

  const onHoverHandler = (): void => {
    setIsHoveringOnSidebar(true);
  };

  const onMouseLeaveHandler = (): void => {
    setIsHoveringOnSidebar(false);
  };

  return (
    <div
      className="sidebar"
      onMouseOver={onHoverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="sidebar-content">
        {sidebarOptions.map(({ component, name, id }) => (
          <div key={id} className="icon-container">
            <span className="logo">{component}</span>
            {isHoveringOnSidebar && name && <span>{name}</span>}
          </div>
        ))}
        <div className="community-buttons">
          <TwitterLogo />
          <DiscordLogo />
          <TwitchLogo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
