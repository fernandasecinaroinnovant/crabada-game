import CrabClassLegend from "./CrabClassLegend/CrabClassLegend";
import InfoIcon from "../../../../assets/SVG/InfoIcon";
import P2eBlackIcon from "../../../../assets/SVG/P2E-icon-black.svg";
import CustomizedLineChart, {
  ChartData,
} from "./CustomizedLineChart/CustomizedLineChart";
import "./chart.scss";

const crabClasses: {
  crabName: string;
  legendColor: string;
  chartColor: string;
}[] = [
  {
    crabName: "PRIME",
    legendColor: "#40380F",
    chartColor: "#C9B22E",
  },
  {
    crabName: "BULK",
    legendColor: "#401913",
    chartColor: "#793024",
  },
  {
    crabName: "CRABOID",
    legendColor: "#001C40",
    chartColor: "#0068EC",
  },
  {
    crabName: "RUINED",
    legendColor: "#1D1640",
    chartColor: "#533FB4",
  },
  {
    crabName: "GEM",
    legendColor: "#400C2B",
    chartColor: "#EC2C9E",
  },
  {
    crabName: "ORGANIC",
    legendColor: "#14400F",
    chartColor: "#34A527",
  },
  {
    crabName: "SURGE",
    legendColor: "#40090B",
    chartColor: "#FC252B",
  },
  {
    crabName: "SUNKEN",
    legendColor: "#074040",
    chartColor: "#108C8C",
  },
];

const Chart: React.FC<{ data: ChartData[] }> = (props) => {
  const { data } = props;

  return (
    <div className="crabada-chart">
      <div className="crabada-chart-content">
        <div className="crabada-header-chart-container">
          <div className="chart-header">
            <div className="chart-title">
              <div className="chart-title-first-row">
                Crabada Count
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
            <CustomizedLineChart crabClasses={crabClasses} data={data} />
          </div>
        </div>
        <div className="chart-legends">
          <span className="chart-legends-title">POPULATION BREAKDOWN</span>
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
