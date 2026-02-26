import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

const CountRenderer = () => {
    const count = useRecoilValue(countAtom);
    return(
        <div>
            {count}
        </div>
    )
}

export { CountRenderer }