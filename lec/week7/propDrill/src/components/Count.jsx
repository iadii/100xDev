import { Button } from "./Buttons"

export function Count({count, setCount}){
    return(
        <div>
            {count}

            {/* this component(<Count />) does not need setCount */}
            {/* but because of <Button /> setCount will need  setCount*/}
            <Button count={count} setCount={setCount}/>
        </div>
    )
}  