import React from 'react'

const LearnLiftingStateup = (props) => {
    const handleClick = () => {
        let stock = "Tesla"
        props.getStock(stock)
        
    }
  return (
    <>
    <h1>Learn Lifting State Up</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default LearnLiftingStateup