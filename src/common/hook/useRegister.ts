import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IAccount } from "../type";
import useCreateCart from "./useCreateCart";

const useRegister = () => {
  const { createCart } = useCreateCart();
  const register = async (userInfo: IAccount) => {
    const res = await apis.register(userInfo).then((data) => data);
    if (res.status.code === "00") {
      createCart({ accountId: userInfo.accountId });
      NotificationSuccess("Thông báo", "Đăng kí thành công");
    }
    if (res.status.code === "01") {
      NotificationError("Thông báo", "Đăng kí Thất bại");
    }
    return res;
  };

  return {
    register,
  };
};

export default useRegister;
