import { ChartData } from "../components/Crabada/CrabPrices/Chart/CustomizedLineChart/CustomizedLineChart";

export interface GetPricesRequest {
  from: string;
  breedCount?: number[];
  legend?: number[];
  purity?: number[];
  crabClass: string[];
}

export interface GetPricesResponse {
  bucketDate: number;
  avgPrice: number;
  higherPrice: number;
  lowerPrice: number;
  totalPrice: number;
  totalSales: number;
}
