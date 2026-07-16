import React, { useState } from 'react'

const LearnUseRef = () => {
    const [name, setname] = useState('')
    return (
        <>
            <h2>LearnUseRef</h2>
            <input type="text" value={name} />
        </>
    )
}

export default LearnUseRef