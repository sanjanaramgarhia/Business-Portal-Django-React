import React from 'react'

const LearnMap = () => {
    const names = ["Sanjana", "Rathan", "Joe", "Thomas"]
  return (
    <>
    <h2>Map Functions</h2>
    <ul>
        {names.map((i, index)=>(
            <li key={index}>{i}</li>
        ))}
    </ul>
    </>
  )
}

export default LearnMap