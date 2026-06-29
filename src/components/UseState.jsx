import {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(5)
  console.log(count)

    const handlecount = () => {
        setCount(count + 1)
    }

    const [stockprice, setStockPrice] = useState({stock: 'Tesla', price: 1000})
    console.log(stockprice)

    const handleStockPrice = () => {
        setStockPrice({ ...stockprice, price: stockprice.price + 100 })
    }

  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={handlecount}>Click Me</button>
    <h2>Stock: {stockprice.stock} Price: {stockprice.price}</h2>
    <button onClick={handleStockPrice}>Update Stock Price</button>
    </>
  )
}

export default UseState