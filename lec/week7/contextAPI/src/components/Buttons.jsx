export function Button({ count, setCount }) {
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increasing</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decreasing</button>
        </div>
    )
}