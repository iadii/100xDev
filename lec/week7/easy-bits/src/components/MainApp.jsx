import { useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom } from '../atoms'
import { ButtonUpdator } from './ButtonUpdator'

export function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationsAtom)

    // since we are changing the count of message using buttons or whatever we will need useRecoilState similar to useState
    // since we are rendering and updationg the value so we need useRecoilState
    const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)

    return (
        <>
            <button>Home</button> <br /> <br />
            <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button> <br /> <br />
            <button>Jobs({jobsCount})</button> <br /> <br />
            <button>Notifications({notificationCount})</button> <br /> <br />
            <button>Messaging({messagingCount})</button> <br /> <br />

            // if we want to update the value of something but not really want the value, we should use useSetRecoilState
            // since in buttonUpdator componenet we only update the count of jobs but not rendere there 
            // so we used useSetRecoilState
            <ButtonUpdator />

            <button onClick={() => {
                setMessagingCount(c => c + 1)
            }}>Messaging Counter</button>
        </>
    )
}