import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import { evenOddSelector } from "../store/selectors/evenOddSelector";

const CountRenderer = () => {
    const count = useRecoilValue(countAtom);
    const isEven = useRecoilValue(evenOddSelector);
    return(
        <div>
            {count}
            <br/>
            {isEven ? "Even" : null}
        </div>
    )
}

export { CountRenderer }