// framework imports - 1st party
import * as React from "react"

// lib imports - 3rd party

// app imports
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contract = () => {
  function handleSubmit(e: any) {
    e.preventDefault()
    console.log("submitted!")
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input name="Email" id="Email" />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea name="Message" id="Message" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  )
}

export default Contract
