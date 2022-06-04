import { NotificationError } from "./../../components/Notification/index";
import { useRecoilState } from "recoil";
import { NotificationSuccess } from "../../components/Notification";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";

const useLogin = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;

  const login = async (username: string, password: string) => {
    // gọi vào api login để đăng nhập, trả về 1 user hoặc null
    const user = await apis
      .login({ userName: username, passWord: password })
      .then((data) => data);

    // Nếu trả về user
    if (user) {
      setStateGlobal({
        ...stateGlobal,
        userInfo: user,
      });
      // lưu thông tin user vào trong local storage (bộ nhớ của browser)
      localStorage.setItem("userInfo", JSON.stringify(user));
      NotificationSuccess("Thông báo", "Đăng nhập thành công");
    } else {
      NotificationError("Thông báo", "Đăng nhập Thất bại");
    }
    return user;
  };

  return {
    userInfo,
    login,
  };
};

export default useLogin;
