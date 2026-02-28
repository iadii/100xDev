import axios from "axios";
import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 0, 
//         jobs: 0, 
//         messaging: 0, 
//         notifications: 0
//     }
// });

// i dont want to store data 
// i want to fetch asynchronous from backend
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get("http://localhost:4000/api/v1/notifications")
            return res.data
        }
    })
});
