import { selector } from "recoil";
import { countAtom } from "../atoms/count";

export const evenOddSelector = selector({
  key: "evenOddSelector",
  get: ({ get }) => {
    const count = get(countAtom);

    if (count % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  },
});