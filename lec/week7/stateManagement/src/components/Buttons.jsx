import { useRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

export function Button() {
    const [count, setCount]  = useRecoilState(countAtom);
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