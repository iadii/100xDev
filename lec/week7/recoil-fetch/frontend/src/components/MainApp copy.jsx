import { useRecoilState, useRecoilValue } from 'recoil'
import { notifications } from '../store/atoms/atoms'
import { totalNotificationSelector } from '../store/selector/selector'
import { useEffect } from 'react'
import axios from 'axios'

function MainApp() {
    const [networkCount, setNetworkCount] = useRecoilState(notifications)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    // this is one of doing this 
    // but we can do this using selector in atom of recoil 
    // we need to give default value of data in atom if we are calling fetch here
    // so issue is app will render data though it is for microsecond(if server is up)
    // it will not render anything untill data comes but giving default value in atom it will render data which is given bydefault
    // we will use useRecoilLoadable
    useEffect(() => {
        // fetch
        axios.get("http://localhost:4000/api/v1/notifications")
            .then(res => {
                setNetworkCount(res.data)
            })
    }, [])

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
