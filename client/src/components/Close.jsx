
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    grid-area: cls;
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: .7;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: black;
    }
    &:before {
    transform: rotate(45deg);
    }

    &:after {
    transform: rotate(-45deg);
    }

`;

const CloseButton = (props) => {
    return (<ButtonContainer onClick={props.toggleImg}/>)

}

export default CloseButton