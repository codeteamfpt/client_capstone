import { atom } from "recoil";
import { IAccount, IBook, ICart } from "../common/type";
interface AppStateInterface {
  books?: IBook[];
  accounts?: IAccount[];
  carts?: ICart[];
  userInfo?: IAccount;
}
const GLOBAL_STATE_KEY = "GLOBAL_STATE_KEY";
export const globalState = atom<AppStateInterface>({
  key: GLOBAL_STATE_KEY,
  default: {
    books: [],
    accounts: [],
    carts: [],
    userInfo: undefined,
  },
});
