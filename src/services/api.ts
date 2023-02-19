import { API_URL } from "../shared/constants";
import axios from "axios";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

const getDataFromApi = async (url: string, params?: any) => {
  try {
    const { data } = await axios.get(API_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getDataFromApi };
