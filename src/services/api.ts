import axios from "../shared/axios";
import { API_URL } from "../shared/constants";

const getDataFromApi = async (url: string) => {
  try {
    const { data } = await axios.get(API_URL + url);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getDataFromApi };
