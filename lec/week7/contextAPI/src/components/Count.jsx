import { Button } from "./Buttons"
import { countContext } from "./context"
import { CountRenderer } from "./CountRenderer"

export function Count({ count, setCount }) {
    return (
        <div>
            <CountRenderer />
            <Button count={count} setCount={setCount} />
        </div>
    )
}  