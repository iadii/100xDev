import { useContext } from "react"
import { Button } from "./Buttons"
import { countContext } from "./context"
import { CountRenderer } from "./CountRenderer"

export function Count() {
    const {count, setCount} = useContext(countContext)
    return (
        <div>
            <CountRenderer />
            <Button />
        </div>
    )
}  