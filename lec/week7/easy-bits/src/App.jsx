import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'
import { MainApp } from './components/MainApp'


function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )

}


export default App
