import React from 'react';

import { DivCardContainer, H4Estilo, ImgEstilo } from "./styled"

function Card(props) {
    return (
        <DivCardContainer onClick={props.reproduz}>
            <ImgEstilo src={props.link} alt=""></ImgEstilo>
            <H4Estilo>{props.titulo}</H4Estilo>
        </DivCardContainer>
    )
}

export default Card