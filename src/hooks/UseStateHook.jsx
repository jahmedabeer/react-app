import { useState } from "react"

const UseStateHook = () => {
    const [count, setCount] = useState(0); // returns an array with two elements: a variable and a function
    const [isEmpty, setIsEmpty] = useState(false);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }

    const toggleStatus = () => {
        setIsEmpty(!isEmpty)
    }

    return (
        <>
            Count: {count}
            <br /> <br />
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>

            <br /> <br />
            <p>Is Empty: {isEmpty ? 'Yes' : 'No'}</p>
            <button onClick={toggleStatus}>Toggle status</button>
        </>
    )
}

export default UseStateHook;