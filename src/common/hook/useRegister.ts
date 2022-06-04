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
    // Gọi vào api đăng kí, truyền vào thông tin đã đăng kí
    const res = await apis.register(userInfo).then((data) => data);
    // Nếu trả về response thì tạo cart mới cho user đó
    if (res) {
      createCart({ accountId: res.accountId });
      NotificationSuccess("Thông báo", "Đăng kí thành công");
    } else {
      NotificationError("Thông báo", "Đăng kí Thất bại");
    }
    return res;
  };

  return {
    register,
  };
};

export default useRegister;
