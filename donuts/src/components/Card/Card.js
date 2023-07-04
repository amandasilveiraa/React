import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styled";


function Card() {

    return(
        <CardContainer>
            <ImagemCard>
                <TituloCard>
                    Unicorn Sprinkless
                </TituloCard>

                <TextCard>
                    Strawberry creamy ...
                </TextCard>

                <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard>
            </ImagemCard>
        </CardContainer>
    )

}

    export default Card