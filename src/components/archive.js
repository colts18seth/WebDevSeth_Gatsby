import * as React from "react"
import styled from 'styled-components'

const ArchiveList = styled.ul`
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
    border-left: 1px solid rgba(25, 17, 34, 0.05);
    h4{
        margin-bottom: .5rem;
    }
`

const Archive = () => {

    return (
        <>
            <SideBar>
                <h4>Helpful Sites</h4>
                <ArchiveList>
                    <li><a href="https://www.algoexpert.io/" target="_blank">AlgoExpert</a></li>
                    <li><a href="https://www.leveluptutorials.com/" target="_blank">LevelUpTutorials</a></li>
                    <li><a href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp</a></li>
                    <li><a href="https://www.leetcode.com/" target="_blank">LeetCode</a></li>
                    <li><a href="https://www.hackerrank.com/" target="_blank">HackerRank</a></li>
                    <li><a href="https://www.triplebyte.com/" target="_blank">Triplebyte</a></li>
                    <li><a href="https://www.codingame.com/" target="_blank">Codingame</a></li>
                    <li><a href="https://www.sqlzoo.net/" target="_blank">SQLZOO</a></li>
                </ArchiveList>
            </SideBar>
        </>
    )
}

export default Archive;
