import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

// export function Button() {

//     const [count, setCount]  = useRecoilState(countAtom);
//     console.log("This will cause re rendering")
//     because we are getting count value everytime
//     if we stop taking count value everytime
//     button will stop re rendering
//     return (
//         <div>
//             <button onClick={() => {
//                 setCount(count + 1)
//             }}>Increasing</button>
//             <button onClick={() => {
//                 setCount(count - 1)
//             }}>Decreasing</button>
//         </div>
//     )
// }
export function Button() {
    console.log("This is not rendering")
    const setCount = useSetRecoilState(countAtom);
    return (
        <div>
            <button onClick={() => {
                setCount(count => count + 1)
            }}>Increasing</button>
            <button onClick={() => {
                setCount(count => count - 1)
            }}>Decreasing</button>
        </div>
    )
}