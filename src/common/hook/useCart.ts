import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IAccount } from "../type";

const useCarts = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getCartItems = async (data: IAccount) => {
    const carts = await apis.getAllCartItems(data).then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      carts: carts,
    });
  };
  return {
    carts: stateGlobal.carts,
    getCartItems,
  };
};

export default useCarts;
