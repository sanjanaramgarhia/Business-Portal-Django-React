import React from 'react'

const Counterapp = () => {

    const [count, setCount] = React.useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }
  return (
    <>
    <h2>Counter App</h2>
    <h2>Count: {count}</h2>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default Counterapp