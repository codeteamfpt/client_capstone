import React from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
const useAccounts = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const { accounts } = stateGlobal;
  const getAccounts = async () => {
    const accounts = await apis.getAllAccounts().then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      accounts: accounts,
    });
  };
  React.useEffect(() => {
    getAccounts();
  }, []);
  return {
    accounts,
    getAccounts,
  };
};

export default useAccounts;
