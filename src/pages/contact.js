import React from "react"

import Layout from "../components/layout"
import Section from "../components/Section/Section"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>

    <SEO title="Contact" />
    <Section>
    <h1>Contact us</h1>
    <p><strong>Email</strong> <br></br>info@eduward.in <br></br><br></br>
    <strong>Phone</strong><br></br> Lucknow Regional Office: <br></br>9506677907 <br></br><br></br>Delhi HQ: <br></br>7985161228.
    </p>
    </Section>
    <Section>
    <h2>Queries</h2>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNMNq_nYvn1Q9a12o6VkWYAkG9Y6kKjzQAo6nnlUS51ksC1w/viewform?embedded=true" width="640" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    <h2> Subscribe </h2>
      To keep in touch, subscribe to our mailing list:
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgHMPbEygRgMG0ONBwJEsdPEOPnnn57ZnlpZFgGYKzAeU_7g/viewform?embedded=true" width="640" height="1047" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </Section>
  </Layout>
)

export default Contact;