import { useContext } from "react"
import { countContext } from "./context"
import { useRecoilValue } from "recoil";

const CountRenderer = () => {
    const count = useRecoilValue(countAtom);
    return(
        <div>
            {count}
        </div>
    )
}

export { CountRenderer }