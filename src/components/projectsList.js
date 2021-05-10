import React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const ProjectsList = () => {

    const ProjectsGrid = styled.main`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        p {
            font-size: 0.8rem;
        }
    `

    const Project = styled.div`
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
        padding: 1rem;
        border-radius: 4px;
        text-align: center;
    `

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Projects</h2>
            <ProjectsGrid>
                <Project>
                    <a href="https://key-blogger.netlify.app/" target="_blank" rel="noreferrer">
                        <StaticImage
                            src="../images/Key_Blogger.png"
                            alt="A screenshot from the Key_Blogger app."
                        />
                    </a>
                    <p><b>Key_Blogger</b></p>
                </Project>
                <Project>
                    <a href="https://you-guessed-it.herokuapp.com/" target="_blank" rel="noreferrer">
                        <StaticImage
                            src="../images/You-Guessed-It.png"
                            alt="A screenshot from the You-Guessed-It app."
                        />
                    </a>
                    <p><b>You Guessed It</b></p>
                </Project>
                <Project>
                    <a href="https://colts18seth.github.io/Memory-Game/" target="_blank" rel="noreferrer">
                        <StaticImage
                            src="../images/Memory-Game.png"
                            alt="A screenshot from a Memory Game."
                        />
                    </a>
                    <p><b>Memory Game</b></p>
                </Project>
                <Project>
                    <a href="https://colts18seth.github.io/OOP-Connect-Four/" target="_blank" rel="noreferrer">
                        <StaticImage
                            src="../images/Connect-Four.png"
                            alt="A screenshot from a Connect Four game."
                        />
                    </a>
                    <p><b>Connect-Four</b></p>
                </Project>
                <Project>
                    <a href="https://colts18seth.github.io/Hack-or-Snooze/" target="_blank" rel="noreferrer">
                        <StaticImage
                            src="../images/Hack-or-Snooze.png"
                            alt="A screenshot from a Hacker News Clone."
                        />
                    </a>
                    <p>
                        <b>Hack or Snooze (Hacker News Clone)</b>
                    </p>
                </Project>
            </ProjectsGrid>
        </>
    );
}

export default ProjectsList;