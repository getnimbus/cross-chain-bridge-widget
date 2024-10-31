import {
  AptosSnapAdapter,
  AptosWalletAdapter,
  BitkeepWalletAdapter,
  FewchaWalletAdapter,
  FletchWalletAdapter,
  MartianWalletAdapter,
  NightlyWalletAdapter,
  PontemWalletAdapter,
  RiseWalletAdapter,
  SpikaWalletAdapter,
  TokenPocketWalletAdapter,
  useWallet,
  WalletProvider,
} from "@manahippo/aptos-wallet-adapter";
import { useMemo } from "react";

export const useAptosContext = useWallet;

export const AptosWalletProvider = ({ children }: { children: any }) => {
  const wallets = useMemo(
    () => [
      new AptosWalletAdapter(),
      new MartianWalletAdapter(),
      new RiseWalletAdapter(),
      new NightlyWalletAdapter(),
      new PontemWalletAdapter(),
      new FletchWalletAdapter(),
      new FewchaWalletAdapter(),
      new SpikaWalletAdapter(),
      new AptosSnapAdapter(),
      new BitkeepWalletAdapter(),
      new TokenPocketWalletAdapter(),
    ],
    []
  );
  return (
    <WalletProvider
      wallets={wallets}
      onError={(error: Error) => {
        console.log("wallet errors: ", error);
      }}
    >
      {children}
    </WalletProvider>
  );
};

export default AptosWalletProvider;
