import { useRecoilState, useRecoilValue } from 'recoil'
import { notifications } from '../store/atoms/atoms'
import { totalNotificationSelector } from '../store/selector/selector'

function MainApp() {
    const networkCount = useRecoilValue(notifications)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    return (
        <>
            <button>Home</button>

            <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
            <button>Jobs {networkCount.jobs}</button>
            <button>Messaging ({networkCount.messaging})</button>
            <button>Notifications ({networkCount.notifications})</button>

            <button>Me ({totalNotificationCount})</button>
        </>
    )
}

export { MainApp }
