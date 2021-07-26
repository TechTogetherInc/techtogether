import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import tree from "../images/tree.png";

const BackgroundSection = ({className}) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background2.png" }) {
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
      <div className="about">
        <div className="aboutSubcontainer">
            <h2>
                <span>Explore, dream, and discover. </span>
                <span>New adventures await.</span>
            </h2>
            <br />
            <p>
            Each year McHacks is proud to welcome a diverse group of students from across North America to Montreal for a jam-packed weekend of hacking. This year, McHacks is going global! For 36 hours, the best and brightest students from around the world will connect remotely and build their dreams.
            
            <br /><br />

            Whether you're writing your first line of code, playing around with APIs, or building the next blockchain, McHacks is the place for you. We offer workshops, mentorship, and APIs to get you started, and we’re working hard to make sure everything you need for your next big hack is accessible from home. We hope you’ll join us remotely this winter for an exciting eighth edition of Canada’s favorite hackathon!
            </p>
        </div>

        <div className="byteImages">
            <img src={tree} alt="oops" style={{width: 600, position: "absolute", bottom:"0", right:"0"}}/>
        </div>
      </div>
    </BackgroundImage>
  )
}

const About = styled(BackgroundSection)`
    height: 900px;
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`

export default About;