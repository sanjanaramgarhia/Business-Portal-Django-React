import { useState, useEffect } from 'react'

const LearnUseEffect = () => {

    const [count, setcount] = useState(0)
    const [randomnum, setrandomnum] = useState(0)

    const increasecount = () => {
        setcount(count + 1)
    }

    const Generatenumber = () => {
        const random = Math.floor(Math.random()*100)
        setrandomnum(random);
    }

    useEffect(() => {
    
    // This code will run when the component mounts and whenever the 'count' state changes
    console.log("useEffect called");

    // Cleanup function
    return () => {
        console.log("useEffect cleanup called");  
    }
    },
    [count])

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={increasecount}>Increasecount</button>
            <hr />
            <h2>Random Number: {randomnum}</h2>
            <button onClick={Generatenumber}>Generate Number</button>
            
        </>
    )
}

export default LearnUseEffect