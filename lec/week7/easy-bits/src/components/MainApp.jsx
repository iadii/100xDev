import { useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom } from '../store/atoms/atoms'
import { useMemo } from 'react'
import { totalNotificationSelector } from '../store/selectors/selector'

export function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationsAtom)
    const messagingCount = useRecoilValue(messagingAtom)

    // theres a bit isue in this 
    // if value changes any of this it will cause re rendering
    // so we will memoize it by useMemo
    // const finalValue = networkNotificationCount + jobsCount + notificationCount + messagingCount;

    // but theres more optiomal way
    // use selectors in recoil
    // const finalValue = useMemo(() => {
    //     return networkNotificationCount + jobsCount + notificationCount + messagingCount;
    // },[networkNotificationCount, jobsCount, notificationCount, messagingCount])

    // selectors can derive value from other atoms or other selectors
    // this is better approach that we can use this same logic if we want in other component
    const finalValue = useRecoilValue(totalNotificationSelector)

    return (
        <>
            <button>Home</button> <br /> <br />
            <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button> <br /> <br />
            <button>Jobs({jobsCount})</button> <br /> <br />
            <button>Notifications({notificationCount})</button> <br /> <br />
            <button>Messaging({messagingCount})</button> <br /> <br />

            {/* i want to show the count of all notification on this button */}
            <button>Profile({finalValue})</button> <br /> <br />
        </>
    )
}