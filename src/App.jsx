import HelloWorld from './components/HelloWorld'
import LearnReact from './components/LearnReact'
import LearnJSX from './components/LearnJSX'
import Learnprops from './components/Learnprops'
import Learnevent from './components/Learnevent'
import LearnLiftingStateup from './components/LearnLiftingStateup'
import UseState from './components/UseState'
import Counterapp from './components/Counterapp'

function App() {
  const getStock = (data) => {
    console.log(data)
  }

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
      <Counterapp />
    </>
  )
}

export default App
