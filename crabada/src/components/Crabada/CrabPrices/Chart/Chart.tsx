import CrabClassLegend from "./CrabClassLegend/CrabClassLegend";
import InfoIcon from "../../../../assets/SVG/InfoIcon";
import P2eBlackIcon from "../../../../assets/SVG/P2E-icon-black.svg";
import CustomizedLineChart from "./CustomizedLineChart/CustomizedLineChart";
import "./Chart.scss";

const crabClasses: {
  crabName: string;
  legendColor: string;
  chartColor: string;
}[] = [
  {
    crabName: "prime",
    legendColor: "#40380F",
    chartColor: "#C9B22E",
  },
  {
    crabName: "bulk",
    legendColor: "#401913",
    chartColor: "#793024",
  },
  {
    crabName: "craboid",
    legendColor: "#001C40",
    chartColor: "#0068EC",
  },
  {
    crabName: "ruined",
    legendColor: "#1D1640",
    chartColor: "#533FB4",
  },
  {
    crabName: "gem",
    legendColor: "#400C2B",
    chartColor: "#EC2C9E",
  },
  {
    crabName: "organic",
    legendColor: "#14400F",
    chartColor: "#34A527",
  },
  {
    crabName: "surge",
    legendColor: "#40090B",
    chartColor: "#FC252B",
  },
  {
    crabName: "sunken",
    legendColor: "#074040",
    chartColor: "#108C8C",
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
          <div className="chart">
            <img
              src={P2eBlackIcon}
              alt="P2E black icon"
              className="company-black-icon"
            />
            <CustomizedLineChart crabClasses={crabClasses} />
          </div>
        </div>
        <div className="chart-legends">
          {crabClasses.map(({ crabName, legendColor }) => (
            <CrabClassLegend
              crabName={crabName}
              color={legendColor}
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
