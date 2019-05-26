import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({children, className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "dallas.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
       )
     }
     }
    />
)

const HomeBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  padding: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default HomeBackgroundSection