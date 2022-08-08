interface PricePostRequest {
  from: Date;
  breedCount?: number[];
  legend?: number[];
  purity?: number[];
  crabClass: string[];
}

interface PricePostResponse {
  bucketDate: Date;
  avgPrice: number;
  higherPrice: number;
  lowerPrice: number;
  totalPrice: number;
  totalSales: number;
}

export const postPrices = async (
  body: PricePostRequest
): Promise<PricePostResponse> => {
  const response = await fetch("fewefw", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
