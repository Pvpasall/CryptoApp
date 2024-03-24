"use server";

export default async function euroToEth(amountInEUR: number) {
  const url = "https://openapiv1.coinstats.app/coins/bitcoin?currency=EUR";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "W2XojX4boDRUexiYMOStMA9/0pYUs/XS3bOG/Vfp8nM=",
    },
  };
  let response;
  response = await fetch(url, options);
  response = await response.json();
  if (response && response.price) {
    const ethPriceInEUR = response.price;
    const convertedAmountInETH = amountInEUR / ethPriceInEUR;
    console.log(convertedAmountInETH)
    return convertedAmountInETH;
  } else {
    return null;
  }
}
