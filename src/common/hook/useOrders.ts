import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IAccount } from "../type";

const useOrders = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getOrders = async (accountId: IAccount) => {
    const orders = await apis.getAllOrders(accountId).then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      orders: orders,
    });
  };
  return {
    getOrders,
  };
};

export default useOrders;
