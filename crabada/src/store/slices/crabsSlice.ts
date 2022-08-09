import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetPricesResponse } from "../../models/PricePost";

interface CrabsState {
  values: {
    [date: number]: {
      [crabClass: string]: number;
    };
  };
  lastFetchedDay: number;
  secondLastFetchedDay: number;
}

const initialState: CrabsState = {
  values: {},
  lastFetchedDay: 0,
  secondLastFetchedDay: 0,
};

const crabsSlice = createSlice({
  name: "crabs",
  initialState,
  reducers: {
    addCrabValues(
      state,
      action: PayloadAction<{ prices: GetPricesResponse[]; crabClass: string }>
    ) {
      const { prices, crabClass } = action.payload;

      prices.forEach((price) => {
        if (!state.values[price.bucketDate]) {
          state.values[price.bucketDate] = {};
        }
        state.values[price.bucketDate] = {
          ...state.values[price.bucketDate],
          [crabClass]: price.avgPrice,
        };

        if (price.bucketDate > state.lastFetchedDay) {
          state.secondLastFetchedDay = state.lastFetchedDay;
          state.lastFetchedDay = price.bucketDate;
        }
      });
    },
  },
});

export const { addCrabValues } = crabsSlice.actions;
export default crabsSlice.reducer;
