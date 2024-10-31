import { Adapter } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CloverWalletAdapter,
  Coin98WalletAdapter,
  SolongWalletAdapter,
  TorusWalletAdapter,
  NightlyWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { FC, useMemo } from "react";
import { CLUSTER, SOLANA_HOST } from "../utils/consts";

export const SolanaWalletProvider: FC = (props) => {
  const wallets = useMemo(() => {
    const wallets: Adapter[] = [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new NightlyWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new SolongWalletAdapter(),
      new TorusWalletAdapter(),
    ];
    return wallets;
  }, []);

  return (
    <ConnectionProvider endpoint={SOLANA_HOST}>
      <WalletProvider wallets={wallets} autoConnect>
        {(props as any).children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const useSolanaWallet = useWallet;
