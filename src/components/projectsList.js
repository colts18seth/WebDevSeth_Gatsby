import React from "react"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

//! get images loading!!
//! lvl up tuts gatsby pro 2  video #18

// const Post = styled.article`
//     box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
//     padding: 1rem;
//     border-radius: 4px;
//     margin-bottom: 1rem;
//     a {
//         color: #000;
//         text-decoration: none;
//     }
//     h2 {
//         margin-bottom: 0;
//     }
//     p {
//         font-size: 0.8rem;
//     }
//     .read-more {
//         font-size: 0.8rem;
//         text-decoration: underline;
//         color: #524763;
//     }
// `

const ProjectsList = () => (
    <>
        <h1>Projects</h1>
        <div>
            <div>
                <a href="https://key-blogger.netlify.app/" target="_blank">
                    <GatsbyImage
                        image=""
                        src="../images/Key_Blogger.png"
                        alt="A screenshot from the Key_Blogger app."
                        placeholder="blurred"
                        layout="full-width"
                    />
                </a>
                <p><b>Key_Blogger</b></p>
            </div>

            <div class="col-6">
                <a href="https://you-guessed-it.herokuapp.com/" target="_blank">
                    <img class="pr-2 w-100" src="images\You-Guessed-It.png" />
                </a>
                <p class="text-center"><b>You Guessed It</b></p>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <a href="https://colts18seth.github.io/Memory-Game/" target="_blank" class="pl-2">
                    <img class="w-100" src="/images/Memory-Game.png" />
                </a>
                <p class="text-center"><b>Memory Game</b></p>
            </div>

            <div class="col-6">
                <a href="https://colts18seth.github.io/OOP-Connect-Four/" target="_blank">
                    <img class="pr-2 w-100" src="/images/Connect-Four.png" />
                </a>
                <p class="text-center"><b>Connect-Four</b></p>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <a href="https://colts18seth.github.io/Meme-Generator/" target="_blank" class="pl-2">
                    <img class="w-100" src="/images/Meme-Generator.png" />
                </a>
                <p class="text-center"><b>Meme Generator</b></p>
            </div>

            <div class="col-6">
                <a href="https://colts18seth.github.io/Hack-or-Snooze/" target="_blank">
                    <img class="pr-2 w-100" src="/images/Hack-or-Snooze.png" />
                </a>
                <p class="text-center">
                    <b>Hack or Snooze (Hacker News Clone)</b>
                </p>
            </div>
        </div>
    </>
);

export default ProjectsList;
