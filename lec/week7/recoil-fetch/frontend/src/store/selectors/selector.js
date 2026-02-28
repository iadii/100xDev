import { selector } from "recoil";
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from '../atoms/atoms'
// selectors can derive value from other atoms or other selectors
// this is better approach that we can use this same logic if we want in other component
const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationsAtomCount = get(notificationsAtom)
        const messagingAtomCount = get(messagingAtom)

        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
})
export { totalNotificationSelector } 