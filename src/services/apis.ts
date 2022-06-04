import {
  IAccount,
  IBook,
  ICart,
  InputTypeCart,
  IOrder,
  IRemoveCartItemInput,
} from "../common/type";
import axiosClient from "./api-caller";

// gọi api mà bên backend định nghĩa
const apis = {
  getAllBooks: async (): Promise<IBook[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/getall";
    return axiosClient.get(url);
  },
  getBook: async (data: IBook): Promise<IBook> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/getone";
    return axiosClient.post(url, data);
  },
  createBook: async (data: IBook): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/add";
    return axiosClient.post(url, data);
  },
  updateBook: async (data: IBook): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/update";
    return axiosClient.post(url, data);
  },
  removeBook: async (data: IBook): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/delete";
    return axiosClient.post(url, data);
  },
  getAllCartItems: async (data: IAccount): Promise<ICart[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/getall";
    return axiosClient.post(url, data);
  },
  createCart: async (data: IAccount): Promise<ICart> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/create";
    return axiosClient.post(url, data);
  },
  addToCart: async (data: InputTypeCart): Promise<ICart> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/add";
    return axiosClient.post(url, data);
  },
  getTotalPrice: async (data: IAccount): Promise<number> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/pay";
    return axiosClient.post(url, data);
  },
  removeItemCart: async (data: IRemoveCartItemInput): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/delete";
    return axiosClient.post(url, data);
  },
  getAllAccounts: async (): Promise<IAccount[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/all";
    return axiosClient.get(url);
  },
  getAccount: async (data: IAccount): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/get";
    return axiosClient.post(url, data);
  },
  createAccount: async (data: IAccount): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/regis";
    return axiosClient.post(url, data);
  },
  updateAccount: async (data: IAccount): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/update";
    return axiosClient.post(url, data);
  },
  removeAccount: async (data: IAccount): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/delete";
    return axiosClient.post(url, data);
  },
  getAllOrders: async (data: IAccount): Promise<IOrder[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "bill/get";
    return axiosClient.post(url, data);
  },
  createOrder: async (data: IOrder): Promise<any> => {
    const url = process.env.REACT_APP_API_SOURCE + "bill/save";
    return axiosClient.post(url, data);
  },
  login: async (data: IAccount): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/check";
    return axiosClient.post(url, data);
  },
  register: async (data: IAccount): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/regis";
    return axiosClient.post(url, data);
  },
};

export default apis;
