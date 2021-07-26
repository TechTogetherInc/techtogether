import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import byteBalloon from "../images/byteBalloon.png"
import bytePurpleBalloon from "../images/bytePurpleBalloon.png"

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      className={className}
      fluid={imageData}
    //   backgroundColor={`#040e18`}
    >
      <div className="landing">
        <div className="landingSubcontainer">
          <div className="landingText">
            <div className="landingTextChild">
              <h2>TechTogether</h2>
              <h2>Boston</h2>
              <div className="landingInfo">
                <p>September 10 - 12, 2021 | Virtual Hackathon 💻</p>
                <p>Boston's largest Gender-Focused Hackathon</p>
                <br/>
                <p>Join us for our 5-year anniversary!</p>

                <br/><br/>
                <a type="button" href="https://techtogether.typeform.com/to/pbAZS3I4">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="byteImages" style={{position: "relative"}}>
            <img src={bytePurpleBalloon} alt="oops" style={{width: 175, position: "absolute",bottom:"0", right:"0"}}/>
          </div>

          <div className="byteImages">
            <img src={byteBalloon} alt="oops" style={{width: 175}}/>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const Landing = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default Landing;