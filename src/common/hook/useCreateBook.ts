import React from "react";
import {
  NotificationSuccess,
  NotificationError,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IBook } from "../type";

const useCreateBook = () => {
  const createBook = async (data: IBook) => {
    const res = await apis.createBook(data).then((data) => data);
    if (res.status.code === "000") {
      NotificationSuccess("Thông báo", "Tạo mới sách thành công");
    } else {
      NotificationError("Thông báo", "Tạo mới sách thất bại");
    }
    return res;
  };
  return {
    createBook,
  };
};

export default useCreateBook;
