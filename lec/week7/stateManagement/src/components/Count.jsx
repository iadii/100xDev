import { Button } from "./Buttons"
import { CountRenderer } from "./CountRenderer"
import { countAtom } from "../store/atoms/count"

export function Count() {
    const count = 0;

    console.log("even though this is not using this count component stil rerender")
    console.log("this is problem of context api")
    console.log("fix using state managemnet tool/library")
    console.log("Unnessary re render")

    return (
        <div>
            <CountRenderer />
            <Button />
        </div>
    )
}  