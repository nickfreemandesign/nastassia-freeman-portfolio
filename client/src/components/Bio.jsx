
import React from 'react';
import styled from 'styled-components';

const BioContent = styled.div`
    margin: 0 5% -10px 5%;
    padding-bottom: 100px;

`;

const Bio = (props) => {
    return (
    <BioContent>
        <p>
            Nastassia was taught to sew at an early age from her Colombian grandmother. From there came an AA at the Fashion Institute of Design and Merchandising, followed by a BA at the Art Institute of Hollywood, both majoring in Fashion Design.
        </p>
        <p>
            At 19 she started her journey in apparel design and production working in Los Angeles, Denver and now resides in Seattle.
        </p>
        <p>
            In her past time she creates garments for herself and started a dog sweater line in 2019. When she’s not working, she enjoys hiking, being outdoors with her beagle Lily, and put bulk Agnes, having her partner at her side.)
        </p>
    </BioContent>)

}

export default Bio