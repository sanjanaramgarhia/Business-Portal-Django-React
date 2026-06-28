import {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(5)
  console.log(count)

    const handlecount = () => {
        setCount(count + 1)
    }

  return (
    <>
    <button onClick={handlecount}>Click Me</button>
    </>
  )
}

export default UseState