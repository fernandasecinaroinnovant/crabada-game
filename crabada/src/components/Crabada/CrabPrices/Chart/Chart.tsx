import InfoIcon from "../../../../assets/SVG/InfoIcon";
import CrabClassLegend from "./CrabClassLegend/CrabClassLegend";
import "./Chart.scss";

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
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
          <CrabClassLegend />
        </div>
      </div>
    </div>
  );
};

export default Chart;
