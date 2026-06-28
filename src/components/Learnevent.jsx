

const Learnevent = () => {
    const handleclick = () => {
        console.log("Button Clicked")
    }
    const handleclickagain = (param) => {
        console.log(param)
    }
  return (
    <>
    <button onClick={handleclick}>Click Me</button>
    <br />
    <button onClick={() => handleclickagain("Clicked Again")}>Click Again</button>


    </>
  )
}

export default Learnevent