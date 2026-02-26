import { useContext } from "react"
import { countContext } from "./context"
import { useRecoilState } from "recoil";

export function Button() {
    const [count, setCount]  = useRecoilState();
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increasing</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decreasing</button>
        </div>
    )
}