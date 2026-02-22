import { useContext } from "react"
import { countContext } from "./context"

const CountRenderer = () => {
    const count = useContext(countContext)
    return(
        <div>
            {count}
        </div>
    )
}

export { CountRenderer }