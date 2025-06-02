import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/fir-80089/us-central1/api",
  baseURL:"https://amazon-backend-1ifk.onrender.com"
  // baseURL: "https://amazon-backend-1ifk.onrender.com",
});

export { axiosInstance };
