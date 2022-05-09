import apis from "../../services/apis";
import { IAccount } from "../type";

const useCreateCart = () => {
  const createCart = async (data: IAccount) => {
    const res = await apis.createCart(data).then((data) => data);
    return res;
  };
  return {
    createCart,
  };
};

export default useCreateCart;
