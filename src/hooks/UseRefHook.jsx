import { useRef } from 'react'

const UseRefHook = () => {
    const countRef = useRef(0);

    const Increment = () => {
        countRef.current += 1;

        console.log('Ref: ', countRef.current);
    }

    return (
        <>
            <p>Count: {countRef.current}</p>
            <button onClick={Increment}>Increment</button>
        </>
    )
}

export default UseRefHook;