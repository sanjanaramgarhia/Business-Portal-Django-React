import React from 'react'
import { StockContext } from '../App'

const Child3 = () => {
  return (
    <>
        <StockContext.Consumer>
          {({ stock, price }) => (
            <h1>Child3 - {stock}, Price: ${price}</h1>
          )}
        </StockContext.Consumer>                
    </>
  )
}

export default Child3