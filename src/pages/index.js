import React from "react"
import { Link } from "gatsby"

import Logo from "../components/Header/Logo"
import DemoLink from "../components/DemoLink"
import HomeBackgroundSection from "../components/HomeBackgroundSection"
import Wrapper from "../components/Wrapper"
import Spacer from "../components/Spacer"
import {Card, CardContent} from "../components/Card/Card"
import CardSecondaryTitle from "../components/Card/CardSecondaryTitle"
import CardColumn from "../components/Card/CardColumn"
import CardNav from "../components/Card/CardNav"
import SEO from "../components/seo"

import logoImage from "../shared/logo3.svg"
const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <HomeBackgroundSection>
      <Spacer len='5vh'/>
      <Card width='650px'>
      <Logo height='62px' src={logoImage}></Logo>
      <CardSecondaryTitle>Empowering Education through Technology</CardSecondaryTitle>
     
      <CardContent>
      <CardColumn style={{ borderRight: '1px solid #e4e4e4', paddingRight: '32px'}}>
        <DemoLink default='mediumseagreen' hover='mediumspringgreen' color='white' width='100%'>
          <a href='https://demo.eduward.in'>Get Free Demo</a>
        </DemoLink>
        <DemoLink hover='skyblue' color='white' width='100%'><Link to='/about'>Learn More</Link></DemoLink>
        </CardColumn>

        <CardColumn style={{ paddingLeft: '32px'}}>
        <strong>EduWard is A digital learning platform for schools and colleges.
        </strong>
        <br/>
        Get your institute a superfast website and an industry leading Learning Management System. 
        </CardColumn>
      </CardContent>

      <CardNav>
              <Link exact to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
      </CardNav>
      </Card>
    </HomeBackgroundSection>

  </Wrapper>
)

export default IndexPage
