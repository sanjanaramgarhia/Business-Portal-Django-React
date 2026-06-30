import { useState, useMemo } from "react";

const LearnuseMemo = () => {

    const [count, setCount] = useState(0)
    const[number, setNumber] = useState(10)

    const Increasecount = () => {
        setCount(count + 1)
    }

    // const sumofNumbers = React.useMemo(() => {
    //     let sum = 0
    //     for (let i = 0; i <= number; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }, [number]);
    // console.log(`sum of numbers from 1 to ${number}: `, sumofNumbers);

    const sumofNumbers = useMemo(() => {
        let sum = 0     
        for (let i = 0; i <= number; i++) {
            sum += i;
        }
        return sum;
    }, [number ]);

    return (
    
    <>
    <h2>Learn useMemo</h2>
    <h1>Count: {count}</h1>

    <button onClick={Increasecount}>Increase Count</button>

    </>
  )
}

export default LearnuseMemo 