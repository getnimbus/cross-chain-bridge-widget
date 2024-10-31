import {
  defineStashedWallet,
  WalletProvider,
  AllDefaultWallets,
} from "@suiet/wallet-kit";

// export const useSuiContext = () => {
//   const [accounts, setAccounts] = useState<string[]>([]);
//   const { select, wallets, connected, disconnect, getAccounts } = useWallet();

//   useEffect(() => {
//     let isCancelled = false;
//     if (wallet) {
//       wallet.getAccounts().then((accounts) => {
//         if (!isCancelled) {
//           setAccounts(accounts);
//         }
//       });
//     }
//     return () => {
//       isCancelled = true;
//     };
//   }, [wallet]);

//   return {
//     wallet,
//     accounts,
//     select,
//     wallets,
//     connected,
//     disconnect,
//     getAccounts,
//   };
// };

const stashedWalletConfig = defineStashedWallet({
  appName: "Nimbus",
});

export const SuiWalletProvider = ({ children }: { children: any }) => {
  return (
    <WalletProvider
      defaultWallets={[stashedWalletConfig, ...AllDefaultWallets]}
      autoConnect={false}
    >
      {children}
    </WalletProvider>
  );
};

export default SuiWalletProvider;
