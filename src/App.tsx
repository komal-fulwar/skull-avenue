import "./App.css";
import { useMemo } from "react";
import $ from "jquery";
import * as anchor from "@project-serum/anchor";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
// import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { ThemeProvider, createTheme } from "@material-ui/core";
import NFTDetails from "./pages/NFTDetails";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.REACT_APP_CANDY_MACHINE_ID!
    );

    return candyMachineId;
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

const txTimeoutInMilliseconds = 30000;

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            candyMachineId={candyMachineId}
            connection={connection}
            txTimeout={txTimeoutInMilliseconds}
            rpcHost={rpcHost}
          />
        }
      />
      <Route path="/nft/:nftId" element={<NFTDetails />} />
    </Routes>
  );
};

export default App;
