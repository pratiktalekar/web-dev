export function Counter_button({count, setCount}){
    function onClickHAndler() {
                setCount(count + 1)
    }
    return (
        <div>
            <button onClick={onClickHAndler}>Counter {count}</button>
        </div>
    );
}

export default Counter_button;