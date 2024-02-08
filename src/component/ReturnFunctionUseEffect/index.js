import Child from '@/component/ReturnFunctionUseEffect/Child'
import React, { useState } from 'react'

const index = () => {


  const [data, setData] = useState(0)
  const [key, setKey] = useState(1)
  const handleClick = () => {
    setKey(data => data + 10)
  }
  return (
    <div>
      <button onClick={handleClick}>Parent Increment</button>
      <Child data={data} setData={setData} key={key} setKey={setKey} /></div>
  )
}

export default index