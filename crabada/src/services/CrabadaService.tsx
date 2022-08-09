import { GetPricesRequest, GetPricesResponse } from "../models/PricePost";

export const getPrices = async (
  body: GetPricesRequest
): Promise<GetPricesResponse[]> => {
  const response = fetch(
    "https://api.p2eanalytics.com/marketplace/game/crabada/prices",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.sort((a: GetPricesResponse, b: GetPricesResponse) => {
        return a.bucketDate > b.bucketDate ? 1 : -1;
      });
    });

  return response;
};
