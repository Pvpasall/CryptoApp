"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import euroToEth from "../_actions/euroToEth";
import getEthPrice from "../_actions/getEthPrice";
const Euro = {
  name: "Euro",
  symbol: "EUR",
  currency: "€",
};
const Ether = {
  name: "Ether Token",
  symbol: "ETH",
  currency: "ETH",
};
export default function Component() {
  const [firstCurrency, setFirstCurrency] = useState(Euro);
  const [secondCurrency, setSecondCurrency] = useState(Ether);
  const [price, setPrice] = useState(0);
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const [etherPrice, setEtherPrice] = useState(0);

  //i use _etherPrice pour les variables locales et etherPrice pour les states
  const getNewEthPrice = async () => {
    const _etherPrice = await getEthPrice();
    if (_etherPrice) {
      localStorage.setItem("etherPrice", _etherPrice);
      setEtherPrice(parseFloat(_etherPrice));
      setInitialPrice(_etherPrice);
    }
  };
  useEffect(() => {
    const _etherPrice = localStorage.getItem("etherPrice");
    console.log(parseFloat(_etherPrice!));
    if (_etherPrice) {
      setEtherPrice(parseFloat(_etherPrice));
      setInitialPrice(parseFloat(_etherPrice));
    } else {
      getNewEthPrice();
    }
  }, [firstCurrency, secondCurrency]);
  const setInitialPrice = (_etherPrice: number) => {
    if (firstCurrency.symbol === Euro.symbol) {
      const priceInETH = 1 / _etherPrice;
      const amountInETH = amount / _etherPrice;
      setConvertedPrice(amountInETH);
      setPrice(priceInETH);
    } else {
      const priceInEURO = _etherPrice;
      const amountInEURO = amount * _etherPrice;
      setConvertedPrice(amountInEURO);
      setPrice(priceInEURO);
    }
  };

  const refreshEtherPrice = async () => {
    const _etherPrice = await getEthPrice();
    if (_etherPrice) {
      localStorage.setItem("etherPrice", _etherPrice);
      setEtherPrice(parseFloat(_etherPrice));
      const amountInETH = 1 / parseFloat(_etherPrice);
      setPrice(amountInETH);
    }
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amountToConvert = parseFloat(e.target.value);
    setAmount(amountToConvert);
    if (firstCurrency.symbol === Euro.symbol) {
      if (amountToConvert < 1) return;
      const amountInETH = amountToConvert / etherPrice;
      setConvertedPrice(amountInETH);
    } else {
      if (amountToConvert < 0) return;
      const amountInEURO = amountToConvert * etherPrice;
      setConvertedPrice(amountInEURO);
    }
  };
  const swapCurrency = () => {
    if (firstCurrency.symbol === Euro.symbol) {
      setFirstCurrency(Ether);
      setSecondCurrency(Euro);
    } else {
      setFirstCurrency(Euro);
      setSecondCurrency(Ether);
    }
  };
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 ">
      <div className="flex items-center space-x-4">
        <img
          alt="Token logo"
          className="h-10 w-10 rounded-full"
          height="40"
          src="/images/ether.png"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width="40"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {firstCurrency.symbol}/{secondCurrency.symbol}: Convert{" "}
            {firstCurrency.name} ({firstCurrency.symbol}) to{" "}
            {secondCurrency.name} ({secondCurrency.symbol})
          </h1>
          <p className="text-sm text-gray-600">
            1 {firstCurrency.currency} equals {price.toFixed(8)}{" "}
            {secondCurrency.currency}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="mt-4 text-sm text-gray-600">
          <Button
            className="text-blue-600"
            variant="ghost"
            onClick={refreshEtherPrice}
          >
            Refresh
          </Button>
        </div>
      </div>
      <div className="mt-6  items-center gap-4 md:flex justify-center">
        <div className="flex items-center space-x-3 w-full">
          <Input
            className="border rounded-md p-2  w-full"
            name="first_currency"
            placeholder={firstCurrency.symbol === Euro.symbol ? "1" : "0.1"}
            value={amount}
            type="number"
            onChange={handleAmountChange}
          />
          <div>{firstCurrency.symbol}</div>
        </div>
        <Button
          className="hover:bg-blue-300"
          variant="ghost"
          onClick={swapCurrency}
        >
          <SwapIcon className="text-gray-600" />
        </Button>
        <div className="flex items-center space-x-3 w-full">
          <Input
            className="border rounded-md p-2  w-full"
            placeholder={price.toString()}
            value={convertedPrice}
            type="number"
            readOnly
          />
          <div>{secondCurrency.symbol}</div>
        </div>
      </div>
    </div>
  );
}

function SwapIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fill-rule="evenodd"
        d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
