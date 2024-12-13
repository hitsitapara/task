import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosGetCall = async ({ apiEndPoint, headers }) => {
  try {
    const apiUrl = API_URL + apiEndPoint;
    const result = await axios.get(apiUrl, {
      headers: {
        type: "application/JSON",
        ...headers,
      },
      timeout: 10000,
    });
    return result.data;
  } catch (error) {
    console.log(error);
    throw error.message;
  }
};

export { axiosGetCall };
