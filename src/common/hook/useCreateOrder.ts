import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IOrder } from "../type";

const useCreateOrder = () => {
  const createOrder = async (data: IOrder) => {
    const res = await apis.createOrder(data).then((data) => data);
    if (res.status.code === "00") {
      NotificationSuccess("Thông báo", "Đơn hàng của bạn đã được lưu");
    } else {
      NotificationError("Thông báo", "Đơn hàng không được lưu");
    }
    return res;
  };
  return {
    createOrder,
  };
};

export default useCreateOrder;
