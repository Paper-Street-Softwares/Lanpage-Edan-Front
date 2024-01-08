import "../style/css/componentsStyle/usefulllinks.css";
import styled from "styled-components";
import React from "react";

const ContainerUsefullLinks = styled.div`
  ${(props) =>
    props.theme.containerUsefullLinks}/* Usando os estilos do arquivo CSS */
`;

const GridItem = styled.div`
  ${(props) => props.theme.gridItem}/* Usando os estilos do arquivo CSS */
`;

function UsefullLinks() {
  return (
    <div className="wrapper-UsefullLinks">
      <div className="titleCenter-UsefullLinks">
        <h1>LINKS ÚTEIS</h1>
      </div>
      <ContainerUsefullLinks className="container-usefull-links">
        <GridItem className="grid-item">
          <h1>CARTÃO CNPJ</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>

        <GridItem className="grid-item">
          <h1>INSC ESTADUAL</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
        <GridItem className="grid-item">
          <h1>OPÇÃO SIMPLES</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
      </ContainerUsefullLinks>
      <ContainerUsefullLinks className="container-usefull-links">
        <GridItem className="grid-item">
          <h1>CND-PJ</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
        <GridItem className="grid-item">
          <h1>CND-PF</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
        <GridItem className="grid-item">
          <h1>CRF</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
      </ContainerUsefullLinks>
      <ContainerUsefullLinks className="container-usefull-links">
        <GridItem className="grid-item">
          <h1>CNDT</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
        <GridItem className="grid-item">
          <h1>SEFAZ</h1>
          <p>
            esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
          </p>
          <a href="/">ESQUEÇA TUDO</a>
        </GridItem>
      </ContainerUsefullLinks>
    </div>
  );
}

export default UsefullLinks;
