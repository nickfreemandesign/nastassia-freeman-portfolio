import React from 'react';
import styled from 'styled-components';


const ImgDescContainer = styled.div`
    grid-area: tx;
    border-radius: 5px;
    color: black;
`;

const Title = styled.div`
    font-family: 'Poiret One', Helvetica, monospace;
    font-size: 2rem;
    font-weight: bold;
    margin: 10% 0%;
    border-bottom: solid black 10px;
    @media only screen and (max-width: 768px) {
        padding: 5%;
    }
`;

const Tags = styled.div`
    font-family: Helvetica;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Desc = styled.div`
    font-family: 'Raleway';
    line-height: 3;
        @media only screen and (max-width: 768px) {
            padding: 20px;
            line-height: 2;
        }
        @media only screen and (min-width: 768px) {
            padding-right: 8%;
        }
`;

const ImageDescription = (props) => {
    console.log(props);

    return (
        <ImgDescContainer>
            <Title>{props.title.toUpperCase()}</Title>
            <Tags>
                {
                    props.tags.map( (tag, idx) => {
                        return <div key={idx}>{tag}</div>
                    })
                }
            </Tags>
            <Desc>{props.desc}</Desc>
        </ImgDescContainer>
    )
}

export default ImageDescription

