import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const ProjectsArchive = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-size: 0.8rem;
        text-decoration: underline;
        color: #17a2b8;
    }
`

const SideBar = styled.aside`
    text-align: center;
    border-right: 1px solid rgba(25, 17, 34, 0.05);
    h4{
        margin-bottom: .5rem;
    }
`

const Archive = () => {

    return (
        <>
            <SideBar>
                <h4>Projects</h4>
                <ProjectsArchive>
                    <li>
                        <Link to="/projects">
                            Key_Blogger
                    </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            You_Guessed_It
                    </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Memory_Game
                    </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Connect_Four
                    </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Hack_or_Snooze
                    </Link>
                    </li>
                </ProjectsArchive>
            </SideBar>
        </>
    )
}

export default Archive;
