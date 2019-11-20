import React from 'react';
import styled from 'styled-components';

// custom imports
import ImgDesc from './ImageDescription';
import CloseButton from './Close';


const ImgContainer = styled.div`
    position: absolute;
    margin: auto;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background-color: rgba(0,0,0,.01);
`

const ImgFull = styled.div`
    grid-area: im;
    max-height: 95vh;
    width: auto;
    margin: auto;
    overflow-y: auto;
    > img {
        width: 100%;  
    }
    @media only screen and (max-width: 768px) {
        overflow-y: unset;
    }
`;

const ImgContent = styled.div`
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-areas: '.. cls'
                         'im tx ';
    grid-template-columns: 2fr 1fr;                         
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 100px;
        grid-template-areas: 'cls'
                             'tx '
                             'im ';
        grid-template-columns: 1fr;
    }
`;



const Image = (props) => {
    console.log(props)
    
    return (<ImgContainer>
                <ImgContent>
                    <CloseButton toggleImg={props.toggleImg}/>
                    <ImgFull>
                        <img src={props.currImg.full}/>
                    </ImgFull>  
                    <ImgDesc title={props.currImg.name} desc={props.currImg.description} tags={props.currImg.tags}/>
                </ImgContent>
            </ImgContainer>)
}

export default Image

