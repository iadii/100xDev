import { useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom } from '../atoms'

export function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationsAtom)

    // since we are changing the count of message using buttons or whatever we will need useRecoilState similar to useState
    const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
    return (
        <>
            <button>Home</button> <br /> <br />
            <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button> <br /> <br />
            <button>Jobs({jobsCount})</button> <br /> <br />
            <button>Notifications({notificationCount})</button> <br /> <br />
            <button>Messaging({messagingCount})</button> <br /> <br />


            <button onClick={() => {
                setMessagingCount(c => c + 1)
            }}>Messaging Counter</button>
        </>
    )
}