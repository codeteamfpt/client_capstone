import React from "react";
import { IAccount, IBook, ICart } from "../common/type";
import axiosClient from "./api-caller";

const apis = {
  getAllBooks: async (): Promise<IBook[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/getall";
    return axiosClient.get(url);
  },
  getBook: async (id: string): Promise<IBook> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/get";
    return axiosClient.get(url, { params: id });
  },
  createBook: async (data: any): Promise<IBook> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/create";
    return axiosClient.post(url, { params: data });
  },
  updateBook: async (data: any): Promise<IBook> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/update";
    return axiosClient.put(url, { params: data });
  },
  deleteBook: async (id: string): Promise<IBook> => {
    const url = process.env.REACT_APP_API_SOURCE + "book/delete";
    return axiosClient.delete(url, { params: id });
  },
  getAllCarts: async (params: any): Promise<ICart[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/getall";
    return axiosClient.get(url, { params });
  },
  getCart: async (id: string): Promise<ICart> => {
    const url = "";
    return axiosClient.get(url, { params: id });
  },
  createCart: async (data: any): Promise<ICart> => {
    const url = process.env.REACT_APP_API_SOURCE + "cart/create";
    return axiosClient.post(url, { params: data });
  },
  updateCart: async (data: any): Promise<ICart> => {
    const url = "";
    return axiosClient.put(url, { params: data });
  },
  deleteCart: async (id: string): Promise<ICart> => {
    const url = "";
    return axiosClient.delete(url, { params: id });
  },
  getAllAccounts: async (): Promise<IAccount[]> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/all";
    return axiosClient.get(url);
  },
  getAccount: async (id: string): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/get";
    return axiosClient.get(url, { params: id });
  },
  createAccount: async (data: any): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/regis";
    return axiosClient.post(url, { params: data });
  },
  updateAccount: async (data: any): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/update";
    return axiosClient.put(url, { params: data });
  },
  deleteAccount: async (id: string): Promise<IAccount> => {
    const url = "";
    return axiosClient.delete(url, { params: id });
  },
  login: async (params: any): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/check";
    return axiosClient.get(url, { params: { ...params } });
  },
  register: async (params: any): Promise<IAccount> => {
    const url = process.env.REACT_APP_API_SOURCE + "account/regis";
    return axiosClient.get(url, { params: { ...params } });
  },
};

export default apis;
