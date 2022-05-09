import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import apis from "../../services/apis";
import { IBook } from "../type";

const useRemoveBook = () => {
  const removeBook = async (data: IBook) => {
    const status = await apis.removeBook(data).then((data) => data);
    if (status.status.code === "000") {
      NotificationSuccess("Thông báo", "Xóa sách thành công");
    } else {
      NotificationError("Thông báo", "Xóa sách thất bại");
    }
    return status;
  };
  return { removeBook };
};

export default useRemoveBook;
