import { atom } from "recoil";
interface AppStateInterface {}
const APP_STATE_KEY = "APP_STATE_KEY";
export const appState = atom<AppStateInterface>({
  key: APP_STATE_KEY,
  default: {
    books: [],
  },
});
