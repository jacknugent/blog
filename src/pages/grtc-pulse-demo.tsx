import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import openSocket from "socket.io-client"
import styled from "@emotion/styled"
const socket = openSocket(process.env.NGROK_ID)

const Container = styled.div``
const Title = styled.h1`
  text-align: center;
  font-size: 5vw;
`

const Estimates = styled.p`
  display: flex;
  justify-content: space-around;
  font-size: 7vw;
`

const PulseDemo = (props: any) => {
  const [stopName, setStopName] = useState("Loading...")
  const [estimates, setEstimates] = useState([])
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
    console.log(data)
    if (data) {
      const stopInfo = JSON.parse(data)
      setStopName(stopInfo.stpnm)
      setEstimates(stopInfo.estimates)
    } else {
      setEstimates([])
    }
  })

  return (
    <Container>
      <Title>{stopName}</Title>
      <Estimates>
        {estimates.map(estimate => (
          <div>{estimate}</div>
        ))}
      </Estimates>
      <select value={route} onChange={(e: any) => changeSocket(e.target.value)}>
        <option value={3504}>Scott's Addition East</option>
        <option value={3503}>Scott's Addition West</option>
      </select>
    </Container>
  )
}

export default PulseDemo
