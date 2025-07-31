import axios from "axios";

// const cors = require("cors");

// const apiUrl = process.env.REACT_APP_API_URL;

const API_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
