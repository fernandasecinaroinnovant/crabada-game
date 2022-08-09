import { useCallback, useEffect, useState } from "react";
import Chart from "../../../components/Crabada/CrabPrices/Chart/Chart";
import CrabPricesFilters from "../../../components/Crabada/CrabPrices/CrabPricesFilters/CrabPricesFilters";
import CrabPricesHeader from "../../../components/Crabada/CrabPrices/CrabPricesHeader/CrabPricesHeader";
// import { postPrices } from "../../../services/crabadaService";
import { subtractMonthsToDate, addDaysToDate } from "../../../utils/dateUtils";
import { usePrices } from "../../../hooks/usePrices";
import "./crabada-prices.scss";

const MONTHS_TO_SHOW_IN_CHART = 1;

const CrabadaPrices: React.FC<{}> = () => {
  // const [crabBuckets, setCrabBuckets] = useState<{
  //   SURGE: PricePostResponse[];
  //   SUNKEN: PricePostResponse[];
  //   PRIME: PricePostResponse[];
  //   BULK: PricePostResponse[];
  //   CRABOID: PricePostResponse[];
  //   RUINED: PricePostResponse[];
  //   GEM: PricePostResponse[];
  //   ORGANIC: PricePostResponse[];
  // }>({
  //   SURGE: [],
  //   SUNKEN: [],
  //   PRIME: [],
  //   BULK: [],
  //   CRABOID: [],
  //   RUINED: [],
  //   GEM: [],
  //   ORGANIC: [],
  // });
  const [filters, setFilters] = useState<{
    breedCount: number;
    legend: number;
    purity: number;
  }>({
    breedCount: 0,
    legend: 0,
    purity: 0,
  });

  const fetchBucketsFromACrabClass = async (
    crabClass: string,
    fromDate: Date
  ) => {
    const requestBody = {
      from: fromDate.toISOString(),
      crabClass: [crabClass],
    };
    // return await getPrices(requestBody);
  };

  // const fetchBuckets = useCallback(async () => {
  //   // const allBuckets: {
  //   //   SURGE: PricePostResponse[];
  //   //   SUNKEN: PricePostResponse[];
  //   //   PRIME: PricePostResponse[];
  //   //   BULK: PricePostResponse[];
  //   //   CRABOID: PricePostResponse[];
  //   //   RUINED: PricePostResponse[];
  //   //   GEM: PricePostResponse[];
  //   //   ORGANIC: PricePostResponse[];
  //   // } = {
  //   //   SURGE: [],
  //   //   SUNKEN: [],
  //   //   PRIME: [],
  //   //   BULK: [],
  //   //   CRABOID: [],
  //   //   RUINED: [],
  //   //   GEM: [],
  //   //   ORGANIC: [],
  //   // };
  //   const allBuckets: PricePostResponse[] = [];
  //   const sixMonthsPrior = subtractMonthsToDate(
  //     MONTHS_TO_SHOW_IN_CHART,
  //     new Date()
  //   );
  //   await new Promise<void>((resolve) => {
  //     crabClasses.forEach(async (crabClass: string) => {
  //       console.log(crabClass, "crabClass");
  //       let date = new Date(sixMonthsPrior.getTime());
  //       do {
  //         const bucketsFetched = await fetchBucketsFromACrabClass(
  //           crabClass,
  //           date
  //         );
  //         console.log(bucketsFetched, "bucketsFetched");
  //         allBuckets.concat(bucketsFetched);
  //         console.log(allBuckets, "allBuckets");

  //         date = addDaysToDate(30, date);
  //       } while (date < new Date());
  //       console.log(allBuckets, "allBuckets");
  //     });
  //     resolve();
  //   });
  //   return allBuckets;
  // }, []);

  // useEffect(() => {
  //   const getBucketsData = async () => {
  //     const crabBuckets = await fetchBuckets();
  //     // setCrabBuckets(crabBuckets);
  //   };
  //   getBucketsData();
  // }, [filters]);

  usePrices("2022-07-01T00:00:00.000000Z");

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
