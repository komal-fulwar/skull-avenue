import axios from "axios";

const baseUrl = "https://fast-stream-37451.herokuapp.com"

export const getAllNft = (page: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(page, 'page number')
      try {
        const res = await axios.get(`${baseUrl}/metadatas?page_no=${page}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  export const getNftDetails = (id: any): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(id, 'id number')
      try {
        const res = await axios.get(`${baseUrl}/metadata?edition_no=${id}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  export const filterByRank = (page: any,sort:string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(page, 'id number')
      try {
        const res = await axios.get(`${baseUrl}/filter_by_rank?rank_filter=${sort}&page_no=${page}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  export const filterByRarity = (page: any,sort:string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(page, 'id number')
      try {
        const res = await axios.get(`${baseUrl}/filter_by_rarity?rarity_filter=${sort}&page_no=${page}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }
  export const filterByAttCount = (page: any,sort:string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(page, 'id number')
      try {
        const res = await axios.get(`${baseUrl}/filter_by_attribute_count?attribute_filter=${sort}&page_no=${page}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  export const searchNft = (page: any,keyword:string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      console.log(page, 'id number')
      try {
        const res = await axios.get(`${baseUrl}/search?name=${keyword}&page_no=${page}`);
        resolve(res.data);
      }
      catch (err) {
        reject(err);
      }
    });
  }