import { Button } from "./Buttons"
import { CountRenderer } from "./CountRenderer"

export function Count() {
    // console.log("it is not re-rendering")
    return (
        <div>
            <CountRenderer />
            <Button />
        </div>
    )
}  