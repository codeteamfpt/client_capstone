import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IAccount } from "../type";

const useRemoveAccount = () => {
  const removeAccount = async (data: IAccount) => {
    const status = await apis.removeAccount(data).then((data) => data);
    if (status.status.code === "00") {
      NotificationSuccess("Thông báo", "Xóa người dùng thành công");
    } else {
      NotificationError("Thông báo", "Xóa người dùng thất bại");
    }
    return status;
  };
  return { removeAccount };
};

export default useRemoveAccount;
