import { useContext } from "react"
import { countContext } from "./context"

export function Button() {
    const {count, setCount} = useContext(countContext)
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