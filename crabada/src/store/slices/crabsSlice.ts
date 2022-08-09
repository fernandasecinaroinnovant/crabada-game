import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GetPricesResponse } from "../../models/PricePost";

interface CrabsState {
  [date: number]: {
    [crabClass: string]: number;
  };
}

const initialState: CrabsState = {};

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
        if (!state[price.bucketDate]) {
          state[price.bucketDate] = {};
        }
        state[price.bucketDate] = {
          ...state[price.bucketDate],
          [crabClass]: price.avgPrice,
        };
      });
    },
  },
});

export const { addCrabValues } = crabsSlice.actions;
export default crabsSlice.reducer;
