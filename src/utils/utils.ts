import { Connection } from "@metaplex/js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

export const getIdFromName = (nftName: string) => {
  const id = nftName.split("-")[1].split("#")[1];
  return id;
};

export const trimString = (name: string) => {
  const allAttValue = name;
  return allAttValue;
};

export const getRarityNumber = (rarityPer: string) => {
  const rare = rarityPer.split("-")[1];
  return rare;
};

export const getNftsFromWallet = async (address: string) => {
  const connection = new Connection("mainnet-beta");
  const nftsmetadata = await Metadata.findDataByOwner(connection, address);
  //   console.log("Hashlist: ", nftsmetadata);
  return nftsmetadata;
};

export const processNftData = (nftsmetadata: any) => {
  let nftData: any = [];
  nftsmetadata.data.map((nft: any, index: number) =>
    nftData.push({
      id: index,
      name: nft.name,
      image: nft.name,
      rarity: nft.name,
      attributes: nft.name,
    })
  );
  return nftData;
};

export const getOwnerAddressFromUrl = (url: string) => {
  const ownerAddress = url.split("=")[1];
  return ownerAddress;
};
