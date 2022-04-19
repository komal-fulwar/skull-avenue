import axios from "axios";

const baseUrl = "https://fast-stream-37451.herokuapp.com";

export const getAllNft = (page: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    console.log(page, "page number");
    try {
      const res = await axios.get(`${baseUrl}/metadatas?page_no=${page}`);
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

// export const getNftDetails = (id: any): Promise<any> => {
//   return new Promise(async (resolve, reject) => {
//   /get_wallet_edition_number?wallet_address=DQAxJrarsJDt8oqfYciKxYw7So4mhBkoQZDSnFUDydYm&edition_no=6858
//     try {
//       const res = await axios.get(`${baseUrl}/metadata?edition_no=${id}`);
//       resolve(res.data);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

export const getNftDetails = (address?: any, id?: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    let nullAdddress = "";
    if (address?.length > 0) {
      nullAdddress = address;
    }
    try {
      const res = await axios.get(
        `${baseUrl}/get_wallet_edition_number?wallet_address=${nullAdddress}&edition_no=${id}`
      );

      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const filterByRank = (page: any, sort: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    console.log(page, "id number");
    try {
      const res = await axios.get(
        `${baseUrl}/filter_by_rank?rank_filter=${sort}&page_no=${page}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const filterByRarity = (page: any, sort: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    console.log(page, "id number");
    try {
      const res = await axios.get(
        `${baseUrl}/filter_by_rarity?rarity_filter=${sort}&page_no=${page}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};
export const filterByAttCount = (page: any, sort: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    console.log(page, "id number");
    try {
      const res = await axios.get(
        `${baseUrl}/filter_by_attribute_count?attribute_filter=${sort}&page_no=${page}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const searchNft = (page: any, keyword: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    console.log(page, "id number");
    try {
      const res = await axios.get(
        `${baseUrl}/search?name=${keyword}&page_no=${page}`
      );
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getOwnerNFt = (address: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `${baseUrl}/get_wallet_ska_nfts?wallet_address=${address}`
      );
      resolve(res.data);
    } catch (err) {
      console.log(err, "dev error");
    }
  });
};
