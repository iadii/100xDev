const { atom } = require("recoil");

export const countAtom = atom({
    key: "countAtom",
    default: 0   
})