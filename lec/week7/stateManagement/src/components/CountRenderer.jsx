import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import { evenOddSelector } from "../store/selectors/evenOddSelector";

const CountRenderer = () => {
    const count = useRecoilValue(countAtom);
    const result = useRecoilValue(evenOddSelector);
    return(
        <div>
            {count}
            <br/>
            {result}
        </div>
    )
}

export { CountRenderer }