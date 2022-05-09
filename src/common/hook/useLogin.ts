import { NotificationError } from "./../../components/Notification/index";
import { useRecoilState } from "recoil";
import { NotificationSuccess } from "../../components/Notification";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";

const useLogin = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { userInfo } = stateGlobal;
  const login = async (username: string, password: string) => {
    const user = await apis
      .login({ userName: username, passWord: password })
      .then((data) => data);
    if (user) {
      setStateGlobal({
        ...stateGlobal,
        userInfo: user,
      });
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
