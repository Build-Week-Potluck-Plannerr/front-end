import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  //returning axios returns promise rather than resolving it
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
