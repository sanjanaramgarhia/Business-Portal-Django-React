import React, { use, useState } from 'react'

const LearnConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [status, setstatus] = useState(true)

    return (
        <>
            {/* For If - else case use Ternary Operator*/}
            <h2>ConditionalRendering</h2>

            {isLoggedIn ? (
                <h3>Welcome, User</h3>
            ) : (
                <h3>Please Login</h3>
            )}

            {/* Amprassant is used only for if condition */}
            {status && (
                <h3>Show Data</h3>
            )}
        </>
    )
}

export default LearnConditionalRendering