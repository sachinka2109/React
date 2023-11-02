import axios from "axios";

export const uploadFiles = async (data) => {
  const response = await axios.post(url, data);
};
