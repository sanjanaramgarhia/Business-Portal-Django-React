import React from 'react'
import useCounter from '../Hooks/useCounter'

const LearnCustomHooks = () => {
    const { count, increment, decrement, reset } = useCounter(5)
    return (
        <>
            <h1>LearnCustomHooks</h1>
            <h2>count : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default LearnCustomHooks