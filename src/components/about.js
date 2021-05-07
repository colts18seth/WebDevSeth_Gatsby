import React from "react";
import styled from 'styled-components'

const Jumbotron = styled.main`
    text-align: center;
    max-width: 650px;
    margin:0 auto;
    h1 {
        font-style: italic;
        font-size: 4rem;
        margin: 0;
    }
    .intro {
        margin-top: 1.5rem;
    }
`

const About = ({ location }) => (
    <Jumbotron>
        <h1>Hi, I'm Seth.</h1>
        <small>- an aspiring Software Engineer</small>
        <p className="intro">
            I'm a recent coding bootcamp grad. When I started the bootcamp, I knew very
            little about web development. So, I thought it'd be cool to keep
            a record of what I've learned. I'll continue to update this site as I learn new tech and also write blog posts about the tech I'm learning.
        </p>
    </Jumbotron>
);

export default About;