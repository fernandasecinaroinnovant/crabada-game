import CrabClassLegend from "./CrabClassLegend/CrabClassLegend";
import InfoIcon from "../../../../assets/SVG/InfoIcon";
import P2eBlackIcon from "../../../../assets/SVG/P2E-icon-black.svg";
import CustomizedLineChart, {
  ChartData,
} from "./CustomizedLineChart/CustomizedLineChart";
import "./chart.scss";
import { useSelector } from "react-redux";
import { crabClasses } from "../../../../models/constants";
import { RootState } from "../../../../store/store";
import { useMemo } from "react";

const Chart: React.FC<{ data: ChartData[] }> = (props) => {
  const { data } = props;
  const crabsValues = useSelector((state: RootState) => state.crabs.values);
  const crabs = useSelector((state: RootState) =>
    state.crabs.lastFetchedDay
      ? state.crabs.values[state.crabs.lastFetchedDay]
      : {}
  );
  const secondLastCrabs = useSelector((state: RootState) =>
    state.crabs.secondLastFetchedDay
      ? state.crabs.values[state.crabs.secondLastFetchedDay]
      : {}
  );

  const { totalBuckets, minToday } = useMemo(() => {
    const totalBuckets = Object.values(crabsValues).reduce<number>(
      (result: number, curr: { [crabName: string]: number }) =>
        result +
        Object.values(curr).reduce(
          (sum: number, value: number) => sum + value,
          0
        ),
      0
    );
    const minToday = Math.min(...Object.values(crabs));

    return { totalBuckets, minToday };
  }, [crabs, crabsValues]);

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
                {Math.round(totalBuckets)}
                <span className="gray-content">({Math.round(minToday)})</span>
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
              key={crabName}
              value={crabs[crabName]}
              crabName={crabName}
              color={legendColor}
              secondLastValue={secondLastCrabs[crabName]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
