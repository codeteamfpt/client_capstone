import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";
import { IAccount } from "../type";

const useTotalPrice = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);

  const totalPrice = async (data: IAccount) => {
    const res = await apis.getTotalPrice(data).then((data) => data);
    setStateGlobal({
      ...stateGlobal,
      totalBill: res,
    });
    return res;
  };

  return {
    totalBill: stateGlobal.totalBill,
    totalPrice,
  };
};

export default useTotalPrice;
