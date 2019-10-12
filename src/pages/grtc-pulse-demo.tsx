import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import openSocket from "socket.io-client"
const socket = openSocket(process.env.NGROK_ID)

const PulseDemo = (props: any) => {
  const [estimates, setEstimates] = useState("loading...")
  const [route, setRoute] = useState(3504)

  const changeSocket = (newRoute: any) => {
    setRoute(previousState => {
      socket.emit("leaveRoom", previousState)
      socket.emit("room", newRoute)
      return newRoute
    })
  }

  useEffect(() => {
    socket.emit("room", route)
  }, [])

  socket.on("estimate", function(data: any) {
    setEstimates(data)
  })

  return (
    <div>
      <p>{estimates}</p>
      <select value={route} onChange={(e: any) => changeSocket(e.target.value)}>
        <option value={3504}>east</option>
        <option value={3503}>west</option>
      </select>
    </div>
  )
}

export default PulseDemo
