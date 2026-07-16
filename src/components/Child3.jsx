import {useContext} from 'react'
import { StockContext } from '../App'

const Child3 = () => {
  const stockData = useContext(StockContext)
  return (
    // <>
    //     <StockContext.Consumer>
    //       {({ stock, price }) => (
    //         <h1>Child3 - {stock}, Price: ${price}</h1>
    //       )}
    //     </StockContext.Consumer>                
    // </>
    <>
    <h2>Child3 - {stockData.stock}</h2>
    </>
  )
}

export default Child3