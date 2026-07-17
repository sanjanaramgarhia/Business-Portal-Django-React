import React, { useState, useRef } from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef("")
    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }
    return (
        <>
            <h2>LearnUseRef</h2>
            <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={clearText}>clear</button>
        </>
    )
}

export default LearnUseRef