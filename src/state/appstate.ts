import { atom } from "recoil";
import { IAccount, IBook, ICart } from "../common/type";
interface AppStateInterface {
  books?: IBook[];
  book?: IBook;
  accounts?: IAccount[];
  account?: IAccount;
  carts?: ICart[];
  userInfo?: IAccount;
  cartNumber?: number;
}
const GLOBAL_STATE_KEY = "GLOBAL_STATE_KEY";
export const globalState = atom<AppStateInterface>({
  key: GLOBAL_STATE_KEY,
  default: {
    books: undefined,
    book: undefined,
    accounts: undefined,
    account: undefined,
    carts: undefined,
    userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}"),
    cartNumber: 0,
  },
});
