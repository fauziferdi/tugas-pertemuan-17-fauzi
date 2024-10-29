import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const fetchGame = async () => {
  const res = await axios.get(`${API_URL}/games`);
  return res.data;
};

export const fetchGameDetail = async (id) => {
  const res = await axios.get(`${API_URL}/detail/${id}`);
  return res.data;
};
