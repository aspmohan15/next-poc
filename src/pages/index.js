import React, { useState } from 'react'
import ReturnFunctionUseEffect from "../component/ReturnFunctionUseEffect"

const index = () => {


  const [data, setData] = useState(0)
  const [key, setKey] = useState(1)
  const handleClick = () => {
    setKey(data => data + 10)
  }
  return (
    <div>
      <button onClick={handleClick}>Parent Increment</button>
      <ReturnFunctionUseEffect />

    </div>
  )
}

export default index