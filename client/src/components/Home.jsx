import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router } from "@reach/router"

import ImageThumb from "./ImageThumb"
import Bio from "./Bio"

const HomeContainer = styled.div`
    color: white;
    width: 100%;
`;

const HomeContent = styled.div`
    margin: auto;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

const HomeTitle = styled.div`
    font-family: 'Poiret One', Helvetica, monospace;
    background: url('https://s3.amazonaws.com/nastassiafreeman/header.jpg');
    min-height: 500px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-size:     cover;     
    background-repeat:   no-repeat;
    background-position: center center; 
    > h1 {
        font-size: 5rem;
        margin: 5px;
        @media only screen and (max-width: 768px) {
            font-size: 4em;
            text-align: center;
        }
    }
    > h3 {
        font-size: 3rem;
        @media only screen and (max-width: 768px) {
            font-size: 2em;
            text-align: center;
        }
    }
`;

const Home = (props) => {
    return (
        <HomeContainer>
            <HomeTitle>
                <h1>NASTASSIA FREEMAN</h1>
            </HomeTitle>
            <HomeContent>
                {props.data.map(img => {
                    return <ImageThumb key={img.id} toggleImg={props.toggleImg} data={img}/>
                })}
            </HomeContent>
            <Bio/>
        </HomeContainer>
    )
}

export default Home

