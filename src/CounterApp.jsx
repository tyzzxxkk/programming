import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0)//상태 기본값 : 0 count 이전 도는 현재 값, setCount :  count 값  변경 함수 

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
       <button
          className="counter"
          onClick={() => setCount((count) => count + 2)}
        >
          +2
        </button>
      <button
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -1
        </button>
       
    </>
  )
}

export default CounterApp