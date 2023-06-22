import React from 'react';
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home";
import "./styles.css"
import StyledGlobal, { ContainerMain, BodyInteiro } from "./styledGlobal";

function App() {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
  return (
    <>
    <StyledGlobal/>
    <BodyInteiro>

        <Header/>
        
        <ContainerMain>
            <Nav/>
            <Home reproduz={reproduzVideo}/>
        </ContainerMain>

        <Footer/>

    </BodyInteiro>
    </>
  );
}

export default App;
