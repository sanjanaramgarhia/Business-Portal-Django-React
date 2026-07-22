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
import LearnUseRef from './components/LearnUseRef'
import LearnCustomHooks from './components/LearnCustomHooks'
import LearnConditionalRendering from './components/LearnConditionalRendering'
import LearnMap from './components/LearnMap'
import LearnInlineCSS from './components/LearnInlineCSS'
import LearnLoadingImages from './components/LearnLoadingImages'
import LearnForms from './components/LearnForms'

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
      {/* <StockContext.Provider value={{stock, price}}>
        <Child1 />
      </StockContext.Provider> */}
      {/* <LearnUseRef /> */}
      {/* <LearnCustomHooks /> */}
      {/* <LearnConditionalRendering/> */}
      {/* <LearnMap/> */}
      {/* <LearnInlineCSS /> */}
      {/* <LearnLoadingImages/> */}
      <LearnForms/>

    </>
  )
}

export default App
export { StockContext }
