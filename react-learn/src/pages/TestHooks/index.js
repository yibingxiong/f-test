import React, { useState } from 'react'


export default function TestHooks() {
  const [count, setCount] = useState(0)
  return (
    <div onClick={() => {
      setTimeout(() => {
        setCount(count + 1)
        console.log('count', count);
        setCount(count + 1)
        console.log('count', count);
      }, 0);
    }}>testHooks   {count}</div>
  )
}