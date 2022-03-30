import { useEffect, useMemo, useState, useCallback } from "react";
import * as anchor from "@project-serum/anchor";

import styled from "styled-components";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { AlertState, toDate, getAtaForMint } from "./utils";
import Header from "./header/Header";
import Body from "./body/body";
import {
  getAllNft,
  filterByRank,
  filterByRarity,
  filterByAttCount,
  searchNft,
} from "./service/api";
import Pagination from "@mui/material/Pagination";
import { totalNfts } from "./utils/constants";
import FilterList from "./filterList/FilterList";
import Search from "./search/Search";

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const MintContainer = styled.div``; // add your owns styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [sortToggle, setSortToggle] = useState(false);
  const [page, setPage] = useState(0);
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [nft, setNft] = useState([]);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });
  const [isActive, setIsActive] = useState(false);
  const [endDate, setEndDate] = useState<Date>();
  const [itemsRemaining, setItemsRemaining] = useState<number>();
  const [isWhitelistUser, setIsWhitelistUser] = useState(false);
  const [isPresale, setIsPresale] = useState(false);
  const [discountPrice, setDiscountPrice] = useState<anchor.BN>();

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const getNft = async (page: number) => {
    const res = await getAllNft(page);
    setNft(res.mints);
  };

  const handleRankSort = async () => {
    let sort = "a";
    if (sortToggle) {
      sort = "a";
    } else {
      sort = "d";
    }
    const res = await filterByRank(page, sort);
    setSortToggle(!sortToggle);

    console.log("rank rost", res);
    setNft(res.mints);
  };

  const handleRaritySort = async () => {
    let sort = "a";
    if (sortToggle) {
      sort = "a";
    } else {
      sort = "d";
    }
    const res = await filterByRarity(page, sort);
    setSortToggle(!sortToggle);

    console.log("rank rost", res);
    setNft(res.mints);
  };

  const handleAttCountSort = async () => {
    let sort = "a";
    if (sortToggle) {
      sort = "a";
    } else {
      sort = "d";
    }
    const res = await filterByAttCount(page, sort);
    setSortToggle(!sortToggle);

    console.log("rank rost", res);
    setNft(res.mints);
  };

  const handleSearch = async (keyword: string) => {
    const res = await searchNft(page, keyword);
    setNft(res.mint_results);
    console.log("searched", res);
  };

  useEffect(() => {
    getNft(page);
  }, [page, anchorWallet, props.candyMachineId, props.connection]);
  return (
    <>
      <Header />
      <FilterList
        handleRankSort={handleRankSort}
        handleRaritySort={handleRaritySort}
        handleAttCountSort={handleAttCountSort}
      />
      <Search handleSearch={handleSearch} />
      <Body data={nft} />

      <div
        className="container col-sm-4 bg_white box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={totalNfts}
          page={page}
          onChange={(event, val) => setPage(val)}
        />
      </div>
      <br />
    </>
  );
};

export default Home;
