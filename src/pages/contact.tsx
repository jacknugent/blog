// framework imports - 1st party
import * as React from "react"
import { useState } from "react"
// lib imports - 3rd party

// app imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import css from "@emotion/css"

const Contract = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [trick, setTrick] = useState("")
  function handleSubmit(e: any) {
    e.preventDefault()
    if (name && email && message && !trick) {
      console.log(name)
      console.log(email)
      console.log(message)
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            id="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea
            name="Message"
            id="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <div
          css={css`
            display: none;
          `}
        >
          <label htmlFor="trick">to trick spammers</label>
          <input
            name="trick"
            id="trick"
            value={trick}
            onChange={e => setTrick(e.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  )
}

export default Contract
