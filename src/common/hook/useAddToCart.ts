import apis from "../../services/apis";
import { InputTypeCart } from "../type";
const useAddToCart = () => {
  const addToCart = async (data: InputTypeCart) => {
    // thêm book vào cart
    const cart = await apis.addToCart(data).then((data) => data);
    return cart;
  };
  return {
    addToCart,
  };
};

export default useAddToCart;
