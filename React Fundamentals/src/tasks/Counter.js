import React from 'react'
import { useCount } from '../custom hooks/useCounter';

const Counter = () => {
  const {count, increment, decrement} = useCount();

  return (
    <div>
      <button onClick={decrement}>
        Decrement
      </button>

      <span>{count}</span>
      
      <button onClick={increment}>
        increment
      </button>
    </div>
  )
}

export default Counter;
