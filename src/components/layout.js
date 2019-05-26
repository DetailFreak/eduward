/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link,StaticQuery, graphql } from "gatsby"

import {FooterWrapper, FooterContainer} from './Footer/Footer';
import FooterNav from './Footer/FooterNav';
import FooterText from './Footer/FooterText';
import Header from './Header/Header';
import HeaderNav from './Header/HeaderNav';
import Logo from './Header/Logo';
import Wrapper from './Wrapper';

import logoImage from '../shared/logo2.svg';
import "./layout.css";

const Layout = ({ children, transparentHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Wrapper>
          <Header transparent={transparentHeader}>
            <Logo src={logoImage}></Logo>
            <HeaderNav>
              <Link exact to="/"><h2>Home</h2></Link>
              <Link to="/about"><h2>About</h2></Link>
              <Link to="/contact"><h2>Contact</h2></Link>
            </HeaderNav>
          </Header>
          <main>{children}</main>
          <FooterWrapper>
          <FooterContainer>
            <FooterNav>
              Site
              <Link exact to="/"><h2>Home</h2></Link>
              <Link to="/about"><h2>About</h2></Link>
              <Link to="/contact"><h2>Contact</h2></Link>
            </FooterNav>
          </FooterContainer>
          
          <FooterContainer>
            <FooterText>Developed with love by <strong>eduward</strong></FooterText>
          </FooterContainer>
        </FooterWrapper>
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  transparentHeader: PropTypes.bool
}

Layout.defaultProps = {
  transparentHeader: false
}

export default Layout
