import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectsList = ({ projectsQuery }) => {
    console.log(projectsQuery)
    return (
        <>
            <h1>Projects</h1>
            <div>
                <div>
                    <a href="https://key-blogger.netlify.app/" target="_blank" rel="noreferrer">
                        {/* <GatsbyImage
                            image={ }
                            alt="A screenshot from the Key_Blogger app."
                        /> */}
                    </a>
                    <p><b>Key_Blogger</b></p>
                </div>
            </div>
        </>
    );
}

export default ProjectsList;

export const projectsQuery = graphql`
        query ProjectsQuery {
            file(relativePath: {regex: "/Connect/"}) {
                id
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
  `