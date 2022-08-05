import Slider from "../../../Common/Slider/Slider";
import "./CrabPricesFilters.scss";

const CrabPricesFilters: React.FC<{
  filters: { breedCount: number; legend: number; purity: number };
  onChangeFiltersHandler: Function;
}> = (props) => {
  const {
    filters: { breedCount, legend, purity },
    onChangeFiltersHandler,
  } = props;

  return (
    <div className="crab-prices-filters">
      <div className="crab-prices-filters-content">
        <div className="crab-prices-sliders">
          <div className="filter-option">
            <span>Breed count</span>
            <Slider
              name="breedCount"
              value={breedCount}
              onChangeFiltersHandler={onChangeFiltersHandler}
            />
          </div>
          <div className="filter-option">
            <span>Legend</span>
            <Slider
              name="legend"
              value={legend}
              onChangeFiltersHandler={onChangeFiltersHandler}
            />
          </div>
          <div className="filter-option">
            <span>Purity</span>
            <Slider
              name="purity"
              value={purity}
              onChangeFiltersHandler={onChangeFiltersHandler}
            />
          </div>
        </div>
        <div className="filters-buttons">
          <button className="apply-filter-button">Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default CrabPricesFilters;
