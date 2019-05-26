import React from "react"

import DemoLink from "../components/DemoLink"
import Layout from "../components/layout"
import Section from "../components/Section/Section"
import FeaturedSection from '../components/Featured/Featured'
import SEO from "../components/seo"



const About = () => (
  <Layout>
    <SEO title="About" />
    <FeaturedSection>
      <h1>EduWard</h1>
      <h2>A digital platform for schools and colleges.<br/><br/> </h2>
      {/* <DemoLink> <a>Click for Demo</a> </DemoLink> */}
    </FeaturedSection>
    <Section color='rgb(239, 239, 239)'>
    <h1>About</h1>
    <p>
        <strong>EduWard</strong> is a platform to digitize schools and colleges. </p> <p> It provides a school with a modern and responsive website that helps them establish an online presence. 
          It has a built-in learning management system (LMS) which makes administration convenient and paperless. </p> <p>
          Students appreciate time savings in finding relevant course material and staying up to date with 
          Homework, Assigninments, Events etc. on a unified platform.
          <br/>
          <br/>
          <DemoLink> <a href='https://demo.eduward.in/moodle'>Click for Demo</a> </DemoLink> 
      </p>    
    </Section>
    <Section>
    <h2 >
      Explore some of EduWard's popular features
    </h2>
      <br></br>
      {/* <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR4ijmCcQ2K1L8KzR1R_mCSYqdneHtl0XyF26XQ8RAe997foJx-ZfV154m3tRq9oYHug9AS5UtMbAPJ/embed?start=true&loop=true&delayms=3000" frameborder="0" width='800' height='500px' allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> */}
                      
      <h3>Data-driven decisions</h3>
      <p>
        EduWard Analytics allow you to track compliance,
          course completions, and competencies which is 
        valuable when considering employees for promotions or succession planning in general.
      </p>
      <br/>

      <h3>Powerful, flexible and collaborative learning</h3>
      <p>
      Work and learn together in forums, wikis and much more. Encourage self reflection and peer assessment with dedicated tools. Get feedback through polls and surveys.
      </p>
      <br/>

      <h3>Full integration</h3>
      <p>
      As an open-source platform, EduWard easily integrates with and complements your existing education and workplace software solutions, such as Google G-Suite, Microsoft Office, Student Information and library Systems, Xero, Salesforce and more.
      </p>
      <br/>

      <h3>Easy communications</h3>
      <p>
        When enabled, users can receive automatic alerts on new assignments and deadlines, forum posts and also send private messages to one another.
      </p>
      <br/>

      <h3>Accurate grading</h3>
      <p>
        Use custom grading scales and rubrics. Conveniently assign different markers to assignments, manage grade moderation and control when marks are released to individual learners.
      </p>
      <br/>

      <h3>Extendable & customisable</h3>
      <p>
        Your EduWard learning site is extensible and customisable with over 1400 public and free plugins created by our global community. Check our EduWard plugins directory.
      </p>
      <br/>	

      <h3>Easy course editing</h3>
      <p>
        Create courses easily using simple editing settings that will allow you to display materials in a format best suited to your learners.
      </p>
      <br/>	

      <h3>Safe and secure</h3>
      <p>
      EduWard is regularly updated with the latest security patches to help ensure your EduWard site is secure. Teach and share in a private space only you and your class can access.
      </p>	  
      </Section>
  </Layout>
)

export default About
