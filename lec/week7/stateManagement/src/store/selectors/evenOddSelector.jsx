import { selector } from "recoil";
import { countAtom } from "../atoms/count";

export const evenOddSelector = selector({
  key: "evenOddSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0
  },
});