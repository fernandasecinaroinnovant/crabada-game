import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { GetPricesResponse } from "../models/PricePost";
import { getPrices } from "../services/crabadaService";
import { addCrabValues } from "../store/slices/crabsSlice";
import { crabClasses } from "../models/constants";

export const usePrices = () => {
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
          queryFn: () => getPrices({ from, crabClass: [crab.crabName] }),
          onSuccess: (prices: GetPricesResponse[]) => {
            dispatch(addCrabValues({ prices, crabClass: crab.crabName }));
          },
        };
      });
      return [...result, ...queriesFrom];
    }, []),
  });
};
