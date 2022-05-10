import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IAccount } from "../type";

const useUpdateAccount = () => {
  const updateAccount = async (data: IAccount) => {
    const res = await apis.updateAccount(data).then((data) => data);
    if (res.status.code === "000") {
      NotificationSuccess("Thông báo", "Cập nhật người dùng thành công");
    } else {
      NotificationError("Thông báo", "Cập nhật người dùng thất bại");
    }
    return res;
  };
  return {
    updateAccount,
  };
};

export default useUpdateAccount;
