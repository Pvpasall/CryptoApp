// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Sepolia,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { getDefaultProvider } from "ethers";
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Sepolia.chainId]: getDefaultProvider("sepolia"),
    
  },
};
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <DAppProvider config={config}>{children}</DAppProvider>
    </ChakraProvider>
  );
}
