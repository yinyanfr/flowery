import React, { useState, useEffect } from 'react'
import io from "socket.io-client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const socket = io()

const App = () => {
  const [adc, setAdc] = useState([])

  useEffect(() => {
    let i = 0
    socket.on("adc", value => {
      setAdc(adc => ([
        ...adc,
        {
          name: i++,
          value
        }
      ]))
    })
  }, [])

  return (
    <div>
      <LineChart
        width={window.innerWidth}
        height={window.innerHeight}
        data={adc}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  )
}

export default App
