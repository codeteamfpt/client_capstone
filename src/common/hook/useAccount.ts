import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IAccount } from "../type";

const useAccount = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getAccount = async (data: IAccount) => {
    const account = await apis.getAccount(data).then((data) => data);
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
