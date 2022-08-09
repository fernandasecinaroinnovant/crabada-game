import { useState } from "react";
import Chart from "../../../components/Crabada/CrabPrices/Chart/Chart";
import CrabPricesFilters from "../../../components/Crabada/CrabPrices/CrabPricesFilters/CrabPricesFilters";
import CrabPricesHeader from "../../../components/Crabada/CrabPrices/CrabPricesHeader/CrabPricesHeader";
import { usePrices } from "../../../hooks/usePrices";
import "./crabada-prices.scss";

const CrabadaPrices: React.FC<{}> = () => {
  const [filters, setFilters] = useState<{
    breedCount: number;
    legend: number;
    purity: number;
  }>({
    breedCount: 0,
    legend: 0,
    purity: 0,
  });

  usePrices();

  const onChangeFiltersHandler = (filter: string, value: number) => {
    setFilters((previousFiltersValue) => ({
      ...previousFiltersValue,
      [filter]: value,
    }));
  };

  return (
    <div className="crabada-prices-content">
      <div>
        <CrabPricesHeader />
        <CrabPricesFilters
          filters={filters}
          onChangeFiltersHandler={onChangeFiltersHandler}
        />
      </div>
      <Chart data={[]} />
    </div>
  );
};

export default CrabadaPrices;
