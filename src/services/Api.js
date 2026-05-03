import axios from "axios";

const API = "https://api.freeapi.app/api/v1/public/randomusers";

export const fetchUsers = async () => {
  const res = await axios.get(API);
  return res.data.data.data;
};