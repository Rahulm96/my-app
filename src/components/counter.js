import React,{useState} from 'react'

export default function Counter() {
    const [count, setcount] = useState(0);
    function increment(){
        setcount(count +1);
    }
    function decrement(){
        setcount(count -1);
    }
  return (
    <div>
        <p>count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>decrease</button>

    </div>
  )
}
