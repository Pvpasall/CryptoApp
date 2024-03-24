"use server";

export default async function getEthPrice() {
  const url = "https://openapiv1.coinstats.app/coins/ethereum?currency=EUR";
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
    return ethPriceInEUR;
  } else {
    return null;
  }
}
