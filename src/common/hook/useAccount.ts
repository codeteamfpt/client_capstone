import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IAccount } from "../type";

const useAccount = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getAccount = async (data: IAccount) => {
    // lấy từ database ra 1 user
    const account = await apis.getAccount(data).then((data) => data);
    // nếu có thì set vào state
    setStateGlobal({
      ...stateGlobal,
      account: account,
    });
    return account;
  };
  return {
    account: stateGlobal.account,
    getAccount,
  };
};

export default useAccount;
