import React, { useState, useRef } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef("")
    const prevNameRef = useRef("")
    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }
    const handleInput = (e) => {
        prevNameRef.current = name
        setName(e.target.value)
    }
    return (
        <>
            <h2>LearnUseRef</h2>
            <input ref={refElement} type="text" value={name} onChange={handleInput} />
            <button onClick={clearText}>clear</button>
            <br />
            <p>Previous name: {prevNameRef.current}</p>
        </>
    )
}

export default LearnUseRef