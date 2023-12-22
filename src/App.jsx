import { useState,useMemo } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const[arr,setArr]=useState([1,2,3,4,5]);

const handlesubmit=()=>{
  setCount((count)=>count+1);
}
function showmax()
{
  console.log("Memo updated...")
  return Math.max(...arr);
}
const Memo=useMemo(()=>showmax(),[arr])



  return (
    <>
      <button onClick={handlesubmit}>Click me</button>
      <p>{count}</p>
      <p>{Memo}</p>
    </>
  )
}

export default App
