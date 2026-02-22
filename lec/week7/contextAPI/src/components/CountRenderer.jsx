import { useContext } from "react"

const CountRenderer = () => {
    const count = useContext(countContext)
    return(
        <div>
            {count}
        </div>
    )
}

export { CountRenderer }