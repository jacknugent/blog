// framework imports - 1st party
import * as React from "react"
import { useState } from "react"

// lib imports - 3rd party

// app imports
import { colors, button } from "../utils/css/themes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import css from "@emotion/css"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const Title = styled.h1`
  text-align: center;
`

const inputContainer = css`
  width: 100%;
  margin: 0.5rem 0;
  display: inline-block;
`

const input = css`
  width: 100%;
  height: 1.75rem;
  padding-left: 0.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  border: 1px solid black;
  box-sizing: border-box;
`

const block = css`
  display: block;
`

const dots = keyframes`
from, 0%, 20% {
  color: rgba(0,0,0,0);
  text-shadow:
    .25em 0 0 rgba(0,0,0,0),
    .5em 0 0 rgba(0,0,0,0);
  }
40% {
  color: black;
  text-shadow:
    .25em 0 0 rgba(0,0,0,0),
    .5em 0 0 rgba(0,0,0,0);
  }
60% {
  text-shadow:
    .25em 0 0 black,
    .5em 0 0 rgba(0,0,0,0);
  }
80%, 100% {
  text-shadow:
    .25em 0 0 black,
    .5em 0 0 black;
  }
`

const Contract = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [trick, setTrick] = useState("")

  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (name && email && message && !trick) {
      const url =
        "https://jacknugentcontactform.azurewebsites.net/api/JackNugentContactForm"

      const requestBody = {
        Name: name,
        Email: email,
        Message: message,
      }

      const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
      setSent(false)
      setSending(true)
      fetch(url, {
        method: "post",
        headers: header,
        body: JSON.stringify(requestBody),
      }).then(
        (data: any) => {
          setName("")
          setEmail("")
          setMessage("")
          setSending(false)
          setSent(true)

          return data.text()
        },
        function(error) {
          setSending(false)
          console.log(error)
        }
      )
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div
        css={css`
          max-width: 500px;
          margin: auto;
        `}
      >
        <Title>Contact Me!</Title>
        <form onSubmit={e => handleSubmit(e)}>
          <div css={inputContainer}>
            <label css={block} htmlFor="name">
              Name
            </label>
            <input
              css={input}
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div css={inputContainer}>
            <label css={block} htmlFor="Email">
              Your Email
            </label>
            <input
              css={input}
              name="Email"
              id="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div css={inputContainer}>
            <label css={block} htmlFor="Message">
              Message
            </label>
            <textarea
              css={[
                input,
                css`
                  height: 4rem;
                  box-shadow: none;
                `,
              ]}
              name="Message"
              id="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <div
            css={css`
              display: none;
            `}
          >
            <label htmlFor="trick">to trick spammers</label>
            <input
              css={input}
              name="trick"
              id="trick"
              value={trick}
              onChange={e => setTrick(e.target.value)}
            />
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <button
              css={[
                button,
                css`
                  margin: 0.5rem 0;
                  width: 100%;
                  background-color: ${name && email && message && colors.blue};
                  color: ${name && email && message && "white"};
                `,
              ]}
              type="submit"
              value="Contact Me"
            >
              Contact
            </button>
          </div>
        </form>
        {sending && (
          <h2
            css={css`
              text-align: center;
              margin: 0.5rem;
              &:after {
                content: ".";
                animation: ${dots} 1s steps(5, end) infinite;
              }
            `}
          >
            Sending
          </h2>
        )}
        {sent && (
          <p
            css={css`
              text-align: center;
              margin: 0.5rem;
            `}
          >
            Thanks for reaching out! I will get back to you.
          </p>
        )}
      </div>
    </Layout>
  )
}

export default Contract
