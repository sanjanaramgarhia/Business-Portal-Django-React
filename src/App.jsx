import HelloWorld from './components/HelloWorld'
import LearnReact from './components/LearnReact'
import LearnJSX from './components/LearnJSX'
import Learnprops from './components/Learnprops'
import Learnevent from './components/Learnevent'
import LearnLiftingStateup from './components/LearnLiftingStateup'
import UseState from './components/UseState'
import Counterapp from './components/Counterapp'
import LearnUseEffect from './components/LeranUseEffect'
import LearnuseMemo from './components/LearnuseMemo'
import Child1 from './components/Child1'
import { createContext } from 'react' 

// create , Provider, Consumer - context API
const StockContext = createContext()

function App() {
  const getStock = (data) => {
    console.log(data)
  }

  let stock = 'Tesla'
  let price = 1000

  return (
    <>
      {/* <h1>App Component</h1> */}
      {/* <HelloWorld />
      <LearnReact /> */}
      {/* <LearnJSX />
      <Learnprops stock="Tesla" price={price} /> */}
      {/* { <Learnevent /> } */}
      {/* {<LearnLiftingStateup getStock={getStock} /> } */}
      {/* <UseState /> */}
      {/* <Counterapp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnuseMemo /> */}
      <StockContext.Provider value={{stock, price}}>
        <Child1 />
      </StockContext.Provider>
    </>
  )
}

export default App
export { StockContext }
