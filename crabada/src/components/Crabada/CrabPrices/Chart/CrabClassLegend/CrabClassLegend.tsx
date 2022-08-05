import CrabYellow from "../../../../../assets/SVG/crabYellow.svg";
import "./CrabClassLegend.scss";

const CrabClassLegend: React.FC<{}> = () => {
  return (
    <div className="crab-class-legend">
      <img src={CrabYellow}></img>
      <span className="value">2742</span>
      <span className="percentage">+29%</span>
    </div>
  );
};

export default CrabClassLegend;
