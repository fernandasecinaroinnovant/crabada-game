import InfoIcon from "../../../../assets/SVG/InfoIcon";
import CrabClassLegend from "./CrabClassLegend/CrabClassLegend";
import "./Chart.scss";

const crabClasses: { crabName: string; color: string }[] = [
  {
    crabName: "prime",
    color: "#40380F",
  },
  {
    crabName: "bulk",
    color: "#401913",
  },
  {
    crabName: "craboid",
    color: "#001C40",
  },
  {
    crabName: "ruined",
    color: "#1D1640",
  },
  {
    crabName: "gem",
    color: "#400C2B",
  },
  {
    crabName: "organic",
    color: "#14400F",
  },
  {
    crabName: "surge",
    color: "#40090B",
  },
  {
    crabName: "sunken",
    color: "#074040",
  },
];

const Chart: React.FC<{}> = () => {
  return (
    <div className="crabada-chart">
      <div className="crabada-chart-content">
        <div className="crabada-header-chart-container">
          <div className="chart-header">
            <div className="chart-title">
              <div className="chart-title-first-row">
                Crabda Count
                <span className="gray-content todays-low"> (Todays low)</span>
                <InfoIcon />
              </div>
              <div className="chart-title-second-row">
                256,003 <span className="gray-content">($1,543)</span>
              </div>
            </div>
            <div className="all-crabs-buttons">
              <button className="all-crabs-button">All crabs</button>
            </div>
          </div>
          <div className="chart"></div>
        </div>
        <div className="chart-legends">
          {crabClasses.map(({ crabName, color }) => (
            <CrabClassLegend
              crabName={crabName}
              color={color}
              key={crabName}
              percentage={29}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
