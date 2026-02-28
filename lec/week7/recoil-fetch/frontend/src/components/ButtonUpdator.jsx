import { useSetRecoilState } from "recoil"
import { jobsAtom } from "../store/atoms/atoms"

export function ButtonUpdator (){
    const setJobs = useSetRecoilState(jobsAtom)
    return (
        <button onClick={() => {
            setJobs(c => c + 1)
        }}> update jobs count </button>
    )
}