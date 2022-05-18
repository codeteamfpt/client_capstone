import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
const useAccounts = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getAccounts = async () => {
    const accounts = await apis.getAllAccounts().then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      accounts: accounts,
    });
    return accounts;
  };
  return {
    accounts: stateGlobal.accounts,
    getAccounts,
  };
};

export default useAccounts;
