import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router } from "@reach/router"

const ImageThumbContainer = styled.img`
    width: 100%;
    &:hover{
        cursor: pointer;
    }
`;


const ImageThumb = (props) => {
    return <ImageThumbContainer 
                src={props.data.thumb}
                onClick={() => props.toggleImg(props.data)}
            />
}

export default ImageThumb

