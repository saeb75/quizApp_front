import axios from "axios";

const fetch = () => {
  const data = localStorage.getItem("persist:auth");
  const auth = JSON.parse(data);
  let token = null;

  if (auth?.token) {
    token = JSON.parse(auth?.token);
  }

  const instance = axios.create({
    baseURL: "http://localhost:3241/",
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Credentials": true,
    },
  });
  return instance;
};
export default fetch;
