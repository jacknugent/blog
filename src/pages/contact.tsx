// framework imports - 1st party
import * as React from "react"
import { useState } from "react"

// lib imports - 3rd party

// app imports
import { button } from "../utils/css/themes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import css from "@emotion/css"

const Contract = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [trick, setTrick] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (name && email && message && !trick) {
      const url =
        "https://contactformblog.azurewebsites.net/api/ContactBlogForm"

      const requestBody = {
        Name: name,
        Email: email,
        Message: message,
      }

      const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
      }

      fetch(url, {
        method: "post",
        headers: header,
        body: JSON.stringify(requestBody),
      }).then(
        (data: any) => {
          console.log(data)
          return data.text()
        },
        function(error) {
          console.log(error)
        }
      )
    }
  }

  const inputContainer = css`
    width: 100%;
    margin: 0.5rem 0;
    display: inline-block;
  `

  const input = css`
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    border: 1px solid black;
    box-sizing: border-box;
  `

  return (
    <Layout>
      <SEO title="Contact" />
      <div
        css={css`
          max-width: 500px;
          margin: auto;
        `}
      >
        <form onSubmit={e => handleSubmit(e)}>
          <div css={inputContainer}>
            <label
              css={css`
                display: block;
              `}
              htmlFor="name"
            >
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
            <label
              css={css`
                display: block;
              `}
              htmlFor="Email"
            >
              Email
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
            <label
              css={css`
                display: block;
              `}
              htmlFor="Message"
            >
              Message
            </label>
            <textarea
              css={[
                input,
                css`
                  height: 5rem;
                `,
              ]}
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
            <input
              css={[
                button,
                css`
                  margin: 1rem 0;
                  width: 100%;
                `,
              ]}
              type="submit"
              value="Contact Me"
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contract
