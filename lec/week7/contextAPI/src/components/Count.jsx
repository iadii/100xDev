import { Button } from "./Buttons"
import { countContext } from "./context"
import { CountRenderer } from "./CountRenderer"

export function Count({ count, setCount }) {
    return (
        <div>
            {/* {count} */}

            {/* wrap count renderer so no need to pass prop everywhere  */}
            <countContext.Provider value={count}>
                <CountRenderer />
            </countContext.Provider>
            <Button count={count} setCount={setCount} />
        </div>
    )
}  