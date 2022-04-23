import React from "react";
import { IAccount, IBook, ICart } from "../common/type";
import axiosClient from "./api-caller";

const adminApis = {
  getAllBooks: async (params: any): Promise<IBook[]> => {
    const url = "";
    return axiosClient.get(url, { params });
  },
  getBook: async (id: string): Promise<IBook> => {
    const url = "";
    return axiosClient.get(url, { params: id });
  },
  createBook: async (data: any): Promise<IBook> => {
    const url = "";
    return axiosClient.post(url, { params: data });
  },
  updateBook: async (data: any): Promise<IBook> => {
    const url = "";
    return axiosClient.put(url, { params: data });
  },
  deleteBook: async (id: string): Promise<IBook> => {
    const url = "";
    return axiosClient.delete(url, { params: id });
  },
  getAllCarts: async (params: any): Promise<ICart[]> => {
    const url = "";
    return axiosClient.get(url, { params });
  },
  getCart: async (id: string): Promise<ICart> => {
    const url = "";
    return axiosClient.get(url, { params: id });
  },
  createCart: async (data: any): Promise<ICart> => {
    const url = "";
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
  getAllAccounts: async (params: any): Promise<IAccount[]> => {
    const url = "";
    return axiosClient.get(url, { params });
  },
  getAccount: async (id: string): Promise<IAccount> => {
    const url = "";
    return axiosClient.get(url, { params: id });
  },
  createAccount: async (data: any): Promise<IAccount> => {
    const url = "";
    return axiosClient.post(url, { params: data });
  },
  updateAccount: async (data: any): Promise<IAccount> => {
    const url = "";
    return axiosClient.put(url, { params: data });
  },
  deleteAccount: async (id: string): Promise<IAccount> => {
    const url = "";
    return axiosClient.delete(url, { params: id });
  },
};

export default adminApis;
