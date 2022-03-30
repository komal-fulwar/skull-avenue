import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useEffect, useState } from "react";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

export default function Header() {
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log(response);
        console.log("wallet account ", response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  const disconnectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (walletKey && solana) {
      await (solana as PhantomProvider).disconnect();
      setWalletKey(undefined);
    }
  };

  // detect phantom provider exists
  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);

  return (
    <>
      <header
        className="header__1 js-header"
        id="header"
        style={{ minHeight: "181px", backgroundColor: "#201a14" }}
      >
        <div className="container">
          <div
            className="wrapper js-header-wrapper"
            style={{ paddingTop: "50px" }}
          >
            <div className="header__logo">
              <a href="/">
                <img
                  style={{ width: "250px", height: "94px" }}
                  className="header__logo"
                  id="logo_js"
                  src="https://skullavenue.io/wp-content/uploads/2021/12/Schild_02.png"
                  alt="logo"
                />
              </a>
            </div>

            <div className="header__menu">
              <ul className="d-flex space-x-20">
                <li>
                  {" "}
                  <a
                    style={{ fontFamily: "boston" }}
                    className="color_white"
                    href="https://skullavenue.io/"
                  >
                    {" "}
                    Home
                  </a>{" "}
                </li>
                <div className="vl"></div>
                <li>
                  <a
                    style={{ fontFamily: "boston" }}
                    className="color_white"
                    href="https://skullavenue.io/roadmap/"
                  >
                    {" "}
                    RoadMap
                  </a>{" "}
                </li>
                <div className="vl"></div>
                <li>
                  {" "}
                  <a
                    style={{ fontFamily: "boston" }}
                    className="color_white"
                    href="https://skullavenue.io/"
                  >
                    {" "}
                    Collection
                  </a>{" "}
                </li>
                <div className="vl"></div>
                <li>
                  {" "}
                  <a
                    style={{ fontFamily: "boston" }}
                    className="color_white"
                    href="https://skullavenue.io/attributes/"
                  >
                    Attributes
                  </a>
                </li>
                <div className="vl"></div>
                <li>
                  {" "}
                  <a
                    style={{ fontFamily: "boston" }}
                    className="color_white"
                    href="https://skullavenue.io/community/"
                  >
                    {" "}
                    community
                  </a>{" "}
                </li>
              </ul>
            </div>

            {provider && !walletKey && (
              <div className="header__btns">
                <a
                  style={{
                    fontSize: "18px",
                    padding: " 20px 40px",
                    fill: "black",
                    color: "black",
                    backgroundColor: "#f8c307",
                    fontFamily: "boston",
                    borderRadius: " 5px",
                  }}
                  onClick={connectWallet}
                >
                  Connect wallet
                </a>
              </div>
            )}
            {provider && walletKey && (
              <div
                className="header__avatar"
                style={{
                  fontSize: "18px",
                  width: "14rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "inline-block",
                  fill: "black",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "0.4rem",
                  color: "black",
                  backgroundColor: "#f8c307",
                  fontFamily: "boston",
                  borderRadius: " 5px",
                }}
              >
                <div className=" text-centre">
                  <span style={{ color: "black" }}>
                    {provider && walletKey && (
                      <p style={{ color: "black" }}> {walletKey}</p>
                    )}
                  </span>
                </div>

                <div className="avatar_popup space-y-20">
                  <div className="d-flex align-items-center justify-content-between">
                    <span> 13b9ebda035r178... </span>
                    <a href="/" className="ml-2">
                      <i className="ri-file-copy-line"></i>
                    </a>
                  </div>
                  <div className="d-flex align-items-center space-x-10">
                    <img
                      className="coin"
                      src="assets/img/logos/coin.svg"
                      alt="/"
                    />
                    <div className="info">
                      <p className="text-sm font-book text-gray-400">Balance</p>
                      <p className="w-full text-sm font-bold text-green-500">
                        16.58 ETH
                      </p>
                    </div>
                  </div>
                  <div className="hr"></div>
                  <div className="links space-y-10">
                    <a href="#">
                      <i className="ri-landscape-line"></i>{" "}
                      <span> My items</span>
                    </a>
                    <a href="edit_profile.html">
                      <i className="ri-pencil-line"></i>{" "}
                      <span> Edit Profile</span>
                    </a>
                    <div className="btn" onClick={disconnectWallet}>
                      <i className="ri-logout-circle-line"></i>{" "}
                      <span> Disconnect</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="header__burger js-header-burger"></div>

            <div className="header__mobile js-header-mobile">
              <div className="header__mobile__menu space-y-40">
                <ul className="d-flex space-y-20">
                  <li>
                    {" "}
                    <a className="color_black" href="https://skullavenue.io/">
                      {" "}
                      Home
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="color_black" href="https://skullavenue.io/">
                      {" "}
                      RoadMap
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="color_black" href="#">
                      {" "}
                      Collection
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="color_black" href="https://skullavenue.io/">
                      {" "}
                      Attributes
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="color_black" href="#">
                      community
                    </a>
                  </li>
                </ul>
                {/* <li>
                <a
                  className="btn btn-grad btn-sm"
                  style={{ padding: "15px" }}
                  href="Connect-wallet.html"
                >
                  <i className="ri-wallet-3-line"></i>
                  Connect wallet
                </a>
                <a href="">
                  <img
                    width="45"
                    src="https://phantom.app/apple-touch-icon.png"
                    alt=""
                  />
                </a>
              </li> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {!provider && (
        <p>
          No provider found. Install{" "}
          <a href="https://phantom.app/">Phantom Browser extension</a>
        </p>
      )}
    </>
  );
}
