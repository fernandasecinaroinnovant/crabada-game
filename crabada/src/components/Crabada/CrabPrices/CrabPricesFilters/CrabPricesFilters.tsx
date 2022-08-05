import Slider from "../../../Common/Slider/Slider";
import "./crab-prices-filters.scss";

const filterOptions: { title: string; name: string; maxRange: number }[] = [
  { title: "Breed count", name: "breedCount", maxRange: 3 },
  { title: "Legend", name: "legend", maxRange: 6 },
  { title: "Purity", name: "purity", maxRange: 6 },
];

const CrabPricesFilters: React.FC<{
  filters: { breedCount: number; legend: number; purity: number };
  onChangeFiltersHandler: Function;
}> = (props) => {
  const { filters, onChangeFiltersHandler } = props;

  return (
    <div className="crab-prices-filters">
      <div className="crab-prices-filters-content">
        <div className="crab-prices-sliders">
          {filterOptions.map(({ title, name, maxRange }) => (
            <div className="filter-option" key={name}>
              <span>{title}</span>
              <Slider
                name={name}
                maxRange={maxRange}
                value={filters[name as keyof typeof filters]}
                onChangeFiltersHandler={onChangeFiltersHandler}
              />
            </div>
          ))}
        </div>
        <div className="filters-buttons">
          <button className="apply-filter-button">Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default CrabPricesFilters;
