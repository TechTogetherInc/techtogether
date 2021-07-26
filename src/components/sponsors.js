import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import byteTelescope from "../images/byteTelescope.png";

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background3.png" }) {
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
      <div className="sponsors">
          <div className="sponsorsSubcontainer">
            <h2>Our Sponsors</h2>

            <div className="byteImages">
                <img src={byteTelescope} alt="oops" style={{width: 175, position: "absolute", bottom:"0", right:"0"}}/>
            </div>
          </div>
      </div>
    </BackgroundImage>
  )
}

const Sponsors = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default Sponsors;