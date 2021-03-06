import { atom } from "recoil";
import { IAccount, IBook, ICart, IOrder } from "../common/type";
interface AppStateInterface {
  books?: IBook[];
  book?: IBook;
  accounts?: IAccount[];
  account?: IAccount;
  carts?: ICart[];
  userInfo?: IAccount;
  orders?: IOrder[];
  totalBill?: number;
  currentPrice?: number;
}
const GLOBAL_STATE_KEY = "GLOBAL_STATE_KEY";
// định nghĩa init state tổng cho project
export const globalState = atom<AppStateInterface>({
  key: GLOBAL_STATE_KEY,
  // khi chạy project thì các init state này được khởi tạo
  default: {
    books: undefined,
    book: undefined,
    accounts: undefined,
    account: undefined,
    carts: undefined,
    orders: undefined,
    userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}"),
    totalBill: 0,
    currentPrice: 0,
  },
});
