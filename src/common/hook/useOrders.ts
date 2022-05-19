import React from "react";
import { useRecoilState } from "recoil";
import apis from "../../services/apis";
import { globalState } from "../../state/appState";

const useOrders = () => {
  const [stateGlobal, setStateGlobal] = useRecoilState(globalState);
  const getOrders = async () => {
    const orders = await apis.getAllOrders().then((data) => data);
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
