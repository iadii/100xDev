import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )

}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)

  return (
    <>
      <button>Home</button> <br /> <br />
      <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button> <br /> <br />
      <button>Jobs()</button> <br /> <br />
      <button>Messaging()</button> <br /> <br />
      <button>Notifications()</button> <br /> <br />


      <button>Me</button>
    </>
  )
}

export default App
