import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { ChartData } from "../components/Crabada/CrabPrices/Chart/CustomizedLineChart/CustomizedLineChart";
import { GetPricesRequest, GetPricesResponse } from "../models/PricePost";
import { getPrices } from "../services/crabadaService";
import { addCrabValues } from "../store/slices/crabsSlice";

const crabClasses = [
  "SURGE",
  "SUNKEN",
  "PRIME",
  "BULK",
  "CRABOID",
  "RUINED",
  "GEM",
  "ORGANIC",
];

export const usePrices = (from: string) => {
  const dispatch = useDispatch();

  const dates = useMemo(() => {
    const dates = [];
    for (let i = 1; i < 7; i++) {
      dates.push(new Date().setMonth(new Date().getMonth() - i));
    }
    return dates;
  }, []);

  useQueries({
    queries: dates.reduce<any>((result, date) => {
      const queriesFrom = crabClasses.map((crab) => {
        const from = new Date(date).toISOString();
        return {
          queryKey: ["prices", crab, from],
          queryFn: () => getPrices({ from, crabClass: [crab] }),
          onSuccess: (prices: GetPricesResponse[]) => {
            dispatch(addCrabValues({ prices, crabClass: crab }));
          },
        };
      });
      return [...result, ...queriesFrom];
    }, []),
  });
};
