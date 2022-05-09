import React from "react";
import {
  NotificationSuccess,
  NotificationError,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IBook } from "../type";

const useUpdateBook = () => {
  const updateBook = async (data: IBook) => {
    const res = await apis.updateBook(data).then((data) => data);
    if (res.status.code === "000") {
      NotificationSuccess("Thông báo", "Cập nhật sách thành công");
    } else {
      NotificationError("Thông báo", "Cập nhật sách thất bại");
    }
    return res;
  };
  return {
    updateBook,
  };
};

export default useUpdateBook;
