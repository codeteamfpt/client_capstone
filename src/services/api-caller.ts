// Tất cả các api đều phải đi qua axios client
import axios from "axios";
import { AxiosRequestConfig, AxiosResponse } from "axios/index";
// custom instance of axios
const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});

// config cho tất cả các request trước khi gửi đi từ FE
// chỉ định rõ kiểu của config
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// config cho tất cả các response từ server trả về trước khi đến nơi nó gọi
// dùng axios call api luôn trả về axios response
// chỉ định rõ kiểu của axios
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // tất cả dữ liệu trả về chỉ lấy data, không trả về hẳn 1 cái axiosResponse
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
