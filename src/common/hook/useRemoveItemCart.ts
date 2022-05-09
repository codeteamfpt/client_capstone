import React from "react";
import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IRemoveCartItemInput } from "../type";

const useRemoveItemCart = () => {
  const removeItemCart = async (data: IRemoveCartItemInput) => {
    const status = await apis.removeItemCart(data).then((data) => data);
    if (status.status.code === "000") {
      NotificationSuccess("Thông báo", "Xóa khỏi giỏ hàng thành công");
    } else {
      NotificationError("Thông báo", "Xóa khỏi giỏ hàng thất bại");
    }
    return status;
  };
  return { removeItemCart };
};

export default useRemoveItemCart;
