import getImageByKey from "./ClassIcon";
import "./crab-class-legend.scss";

const CrabClassLegend: React.FC<{
  crabName: string;
  color: string;
  value: number;
  secondLastValue: number;
}> = (props) => {
  const { crabName, color, secondLastValue, value } = props;

  const percentage = (value - secondLastValue) / secondLastValue;

  return (
    <div style={{ backgroundColor: color }} className="crab-class-legend">
      <img src={getImageByKey(crabName)}></img>
      <span className="value">{Math.round(value ?? 0)}</span>
      <span className={`percentage ${percentage < 0 && "red"}`}>
        {percentage >= 0 && "+"}
        {!isNaN(percentage) ? percentage.toFixed(2) : 0}%
      </span>
    </div>
  );
};

export default CrabClassLegend;
