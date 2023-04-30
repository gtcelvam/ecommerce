import axios from "axios";
import { base_url } from "./requestMethod";

export const handleRequest = async (method, data = null, path) => {
  const url = base_url + path;
  let result;
  try {
    if (method === "POST") {
      result = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result;
    } else {
      let result = await axios.get(url + `/${data}`);
      return result;
    }
  } catch (error) {
    result = error;
    return result;
  }
};
