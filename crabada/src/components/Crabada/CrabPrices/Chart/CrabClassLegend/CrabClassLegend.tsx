import getImageByKey from "./ClassIcon";
import "./CrabClassLegend.scss";

const CrabClassLegend: React.FC<{
  crabName: string;
  color: string;
  percentage: number;
}> = (props) => {
  const { crabName, color, percentage } = props;
  return (
    <div style={{ backgroundColor: color }} className="crab-class-legend">
      <img src={getImageByKey(crabName)}></img>
      <span className="value">2742</span>
      <span className={`percentage ${percentage < 0 && "red"}`}>
        {percentage >= 0 && "+"}
        {percentage}%
      </span>
    </div>
  );
};

export default CrabClassLegend;
